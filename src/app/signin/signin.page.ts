import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  
  credentials: FormGroup;

  hide = true;
  image_uri: string = "../../assets/add-photo-icon-19.jpg";

  cameraOptions: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  }

  constructor(
    private fb: FormBuilder,
    private camera: Camera,
    private toastController: ToastController, 
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,) { }
  
  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      displayName: ['', [Validators.required]],
      phone: ['']
    });
  }


  setAvatar(){
    this.camera.getPicture(this.cameraOptions).then( image => {
      console.log(image)
      this.image_uri = 'data:image/jpeg;base64,' + image;
    }).catch(error => {
      this.toastController.create({
        message: 'Erro na câmera!',
        duration: 2000,
        color: "danger"
      }).then(toast => {
        toast.present();
      });
    }); 
  }

  async signin(){
    const loading = await this.loadingController.create();
    await loading.present();
    this.credentials.addControl('photo', new FormControl(this.image_uri))
    const user = await this.authService.register(this.credentials.value);
    await loading.dismiss();
  
    if (user) {
      this.router.navigateByUrl('/list', { replaceUrl: true });
    } 
  }

  get email() {
    return this.credentials.get('email');
  }
 
  get password() {
    return this.credentials.get('password');
  }

  get displayName() {
    return this.credentials.get('displayName');
  }

  get photo(){
    return this.image_uri;
  }

  get phone(){
    return this.credentials.get('phone')
  }
}
