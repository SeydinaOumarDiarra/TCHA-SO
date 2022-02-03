import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilclientPageRoutingModule } from './accueilclient-routing.module';

import { AccueilclientPage } from './accueilclient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilclientPageRoutingModule
  ],
  declarations: [AccueilclientPage]
})
export class AccueilclientPageModule {}
