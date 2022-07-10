import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private menuCtrl: MenuController,
    private router: Router) { }
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  
  ngOnInit() {
    this.menuCtrl.enable(false);
  }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Você precisa inserir um email';
    }
    return this.email.hasError('email') ? 'Email inválido!' : '';
  }

  login(){
    this.router.navigate(['/folder'])
  }

  signin(){
    this.router.navigateByUrl('/signin')
  }

}
