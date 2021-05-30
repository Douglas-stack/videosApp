import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MortalKombatligaDaJusticaPage } from './mortal-kombatliga-da-justica.page';

const routes: Routes = [
  {
    path: '',
    component: MortalKombatligaDaJusticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MortalKombatligaDaJusticaPageRoutingModule {}
