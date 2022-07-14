import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CameraOptions } from '@awesome-cordova-plugins/camera';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { ToastController } from '@ionic/angular';
import { Category } from 'src/models/category.model';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-register-item',
  templateUrl: './register-item.page.html',
  styleUrls: ['./register-item.page.scss'],
})
export class RegisterItemPage implements OnInit {

  categories : Category[] = [];
  description = new FormControl('', [Validators.required]);
  image_uri: string = "../../assets/add-photo-icon-19.jpg";
  product: Product;
  sel_category: string;
  photo_selected: boolean = false;

  cameraOptions: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  }

  constructor(
    private camera: Camera,
    private toastController: ToastController) { }

  ngOnInit() {
    this.categories = [
      {id: 1, name: "Blusas"},
      {id: 2, name: "Camisa de frio"},
      {id: 3, name: "Roupas íntimas"},
      {id: 4, name: "Acessórios"}
    ]

    this.product = new Product();
    this.product.category = new Category();
  }

  getDescriptionErrorMessage(){
    return 'Você precisa informar uma descrição!'; 
  }

  setProductPhoto(){
    this.camera.getPicture(this.cameraOptions).then( image => {
      console.log(image)
      this.image_uri = 'data:image/jpeg;base64,' + image;
      this.photo_selected = true;
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
