import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AdministrativoPageRoutingModule } from './administrativo-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdministrativoPage } from './administrativo.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrativoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrativoPageRoutingModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [AdministrativoPage]
})
export class AdministrativoPageModule {}
