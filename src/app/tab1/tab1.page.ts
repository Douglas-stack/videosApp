import { IFilme } from '../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController, SelectValueAccessor } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo ='Videos';

  listaVideos: IFilme[]=[
    {
     nome: 'Mortal Kombat',
     lancamento: '22/10/2023',
     duracao: '2 h',
     classificacao: 18,
     cartaz: 'http:\\ok.com.br',
     generos: ['acao','fantasia','aventura']
    },
    {
      nome: 'Mortal Kombat 10',
      lancamento: '22/10/2024',
      duracao: '4 h',
      classificacao: 16,
      cartaz: 'http:\\ok123.com.br',
      generos: ['acao','fantasia','aventura']
    },
    {
      nome: 'Mortal Kombat 10',
      lancamento: '22/10/2024',
      duracao: '4 h',
      classificacao: 16,
      cartaz: 'http:\\ok123.com.br',
      generos: ['acao','fantasia','aventura']
    }
  ];

  constructor(public alertController: AlertController,public toastController: ToastController) {}
  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja favoritar o filme',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim favoritar',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }
  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
