import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Produtos', url: '/list', icon: 'mail' },
    { title: 'Cadastrar', url: '/register-item', icon: 'paper-plane' }
  ];
  constructor() {}
}
