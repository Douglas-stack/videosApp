import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MortalKombatligaDaJusticaPageRoutingModule } from './mortal-kombatliga-da-justica-routing.module';

import { MortalKombatligaDaJusticaPage } from './mortal-kombatliga-da-justica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MortalKombatligaDaJusticaPageRoutingModule
  ],
  declarations: [MortalKombatligaDaJusticaPage]
})
export class MortalKombatligaDaJusticaPageModule {}
