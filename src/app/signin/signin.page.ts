import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  
  email = new FormControl('', [Validators.required, Validators.email]);
  full_name = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);
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
    private menuCtrl: MenuController,
    private router: Router,
    private camera: Camera,
    private toastController: ToastController) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) 
      return 'Você precisa informar um email!';
    
    return this.email.hasError('email') ? 'Você precisa informar um email válido!' : '';
  }

  getNameErrorMessage(){
    return 'Você precisa informar seu nome!';
  }

  getPhoneErrorMessage(){
    return 'Você precisa informar um número de telefone válido!'; 
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


}
