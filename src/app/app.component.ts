import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  userName = 'teste';
   
  public appPages = [
    { title: 'Produtos', url: '/list', icon: 'mail' },
    { title: 'Cadastrar', url: '/register-item', icon: 'paper-plane' }
  ];
}

// 4/0AdQt8qiVENAR3J1ablWXvL8wcNLSvGKEg3KWn8fsh2JevtsiZSGR18jBInNzNkLJOwSicw