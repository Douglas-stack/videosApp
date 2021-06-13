import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DadosSeriePage } from './dados-series.page';
import { DadosSeriePageRoutingModule } from './dados-series-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosSeriePageRoutingModule
  ],
  declarations: [DadosSeriePage]
})
export class DadosFilmePageModule {}
