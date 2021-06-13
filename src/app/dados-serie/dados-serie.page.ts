import { DadosService } from '../services/dados.service';
import { Component, OnInit } from '@angular/core';
import { ISerieAPI } from '../models/ISerieAPI.models';

@Component(
  {
  selector: 'app-dados-serie',
  templateUrl: './dados-serie.page.html',
  styleUrls: ['./dados-serie.page.scss'],
}
)

export class DadosSeriePage implements OnInit {


  serie: ISeriesAPI;

  generos: string[] = [];


  constructor(public dadosService: DadosService) { }

  ngOnInit() {
  this.serie = this.dadosService.pegarDados('serie');
  this.generos = this.dadosService.pegarDados('generos');
  console.log('Serie enviado', this.serie);
  }
}
