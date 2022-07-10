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
  phone = new FormControl('', [Validators.required, Validators.pattern('^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$')])

  constructor(
    private menuCtrl: MenuController,
    private router: Router) { }
  hide = true;

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) 
      return 'Você precisa inserir um email';
    
    return this.email.hasError('email') ? 'Email inválido!' : '';
  }

  getNameErrorMessage(){
    return 'Você precisa inserir seu nome!';
  }

  getPhoneErrorMessage(){
    if (this.email.hasError('required')) 
      return 'Você precisa inserir um número de telefone!'
    
    return 'O formato do número é inválido!';
  
  }
}
