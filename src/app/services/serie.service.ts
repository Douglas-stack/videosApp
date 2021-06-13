import { HttpClient } from '@angular/common/http';
import { IListaSeries } from '../models/iSerieAPI.models';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class SerieService {

  lingua = 'pt-BR';
  regiao = 'BR';

  private apiURL= 'https://api.themoviedb.org/3/';
  private key= '?api_key=65f78a13099277452b11464c56e0ab8a';


  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscarSeries(busca: string): Observable<IListaSeries>{

    const url =`${this.apiURL}search/movies${this.key}&language=${this.lingua}&region=${this.regiao}&query=${busca}`;

    return this.http.get<IListaSeries>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

    async exibirErro(erro) {
      const toast = await this.toastController.create({
        message: 'Erro ao consultar a API',
        duration: 2000,
        color:'danger',
        position: 'middle'
      });
      toast.present();
      return null;
  }
}
