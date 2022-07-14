import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterItemPage } from './register-item.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterItemPageRoutingModule {}
