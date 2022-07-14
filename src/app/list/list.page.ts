import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

import { RefresherCustomEvent } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  
  clothes = [];
  filters = [];
  @ViewChild(IonModal) modal: IonModal;

  constructor(
    private routerCtrl: Router,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.clothes = [
      {
        id: 1,
        purchasePrice: 1.44,
        salePrice: 1.00,
        category: "Camisa de time",
        description: "Camisa do maior jogador de todos",
        image: "https://static.netshoes.com.br/produtos/camisa-nike-coritiba-jogadeira-1415-n-7-negueba/54/D12-1100-054/D12-1100-054_zoom1.jpg?ts=1616689122&ims=544x"
      },
      {
        id: 1,
        purchasePrice: 24,
        salePrice: 69,
        category: "",
        description: "Cuidado com os sedutores da Internet",
        image: "https://oledobrasil.com.br/wp-content/uploads/2020/11/fernando-diniz-3.jpg"
      },
      {
        id: 1,
        purchasePrice: 9999999,
        salePrice: 9999,
        category: "",
        description: "Messi careca",
        image: "https://pbs.twimg.com/profile_images/1289324739794735104/mQoHcZfq_400x400.jpg"
      },
      {
        id: 1,
        purchasePrice: 1.44,
        salePrice: 1.00,
        category: "Camisa de time",
        description: "Camisa do maior jogador de todos",
        image: "https://static.netshoes.com.br/produtos/camisa-nike-coritiba-jogadeira-1415-n-7-negueba/54/D12-1100-054/D12-1100-054_zoom1.jpg?ts=1616689122&ims=544x"
      },
      {
        id: 1,
        purchasePrice: 1.44,
        salePrice: 1.00,
        category: "Camisa de time",
        description: "Camisa do maior jogador de todos",
        image: "https://static.netshoes.com.br/produtos/camisa-nike-coritiba-jogadeira-1415-n-7-negueba/54/D12-1100-054/D12-1100-054_zoom1.jpg?ts=1616689122&ims=544x"
      },
      {
        id: 1,
        purchasePrice: 1.44,
        salePrice: 1.00,
        category: "Camisa de time",
        description: "Camisa do maior jogador de todos",
        image: "https://static.netshoes.com.br/produtos/camisa-nike-coritiba-jogadeira-1415-n-7-negueba/54/D12-1100-054/D12-1100-054_zoom1.jpg?ts=1616689122&ims=544x"
      },

    ]
  }

  async doRefresh(event: RefresherCustomEvent){

        
  }

  async logout(){
    await this.authService.logout();
    await this.authService.logout();
    this.router.navigateByUrl('/login', { replaceUrl: true });

  }

}
