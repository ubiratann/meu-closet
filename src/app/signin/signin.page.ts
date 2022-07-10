import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  
  email = new FormControl('', [Validators.required, Validators.email]);
  full_name = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required])

  constructor(
    private menuCtrl: MenuController,
    private router: Router) { }
  hide = true;

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
}
