import { Injectable } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  UserCredential,
  updateProfile,
} from '@angular/fire/auth';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadString,
} from '@angular/fire/storage';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private storage: Storage,
    private router: Router) {}

  async register({ email, password, displayName, photo, phone }) {
    console.log(email)
    console.log(password)
    console.log(phone)
    console.log(photo)
    try {
      const user: UserCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password,
      );
      const path = `uploads/${user.user.uid}/profile.png`;
      const storageRef = ref(this.storage, path);

      const imageUrl = await uploadString(storageRef, photo, 'base64');
      
      const userDocRef = doc(this.firestore, `users/${user.user.uid}`);
      await setDoc(userDocRef, {
        imageUrl,
      });

      await updateProfile(user.user, {
        displayName: displayName
      })

      return user;
    } catch (e) {
      console.log(e.message);
    }
  }
 
  async login({ email, password }) {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);
      return user;
    } catch (e) {
      console.log(e.message);
    }
  }
 
  logout() {
    signOut(this.auth);
  }

  public static showError(message: string): void{
    let toastController = new ToastController();

    toastController.create({
      message: message,
      duration: 2000,
      color: "danger"
    }).then(toast => {
      toast.present();
    });
  }
}
