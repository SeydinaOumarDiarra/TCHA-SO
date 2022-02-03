import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravailleurPageRoutingModule } from './travailleur-routing.module';

import { TravailleurPage } from './travailleur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravailleurPageRoutingModule
  ],
  declarations: [TravailleurPage]
})
export class TravailleurPageModule {}
