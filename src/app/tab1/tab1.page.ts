import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController, SelectValueAccessor } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


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
     cartaz: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2921/yyPKysDKN328gIX7dFMuyYns.jpg?w=1920&thumb=false',
     generos: ['acao','fantasia','aventura'],
     pagina: '/mortal-kombat'
    },
    {
      nome: 'Liga da Justiça 1',
      lancamento: '22/10/2024',
      duracao: '4 h',
      classificacao: 16,
      cartaz: 'https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2021/03/23/1572893681-justiceleaguecovercustomtextless.jpg',
      generos: ['acao','fantasia','aventura'],
      pagina: '/liga-da-justiça'
    }
    {
      nome: 'Liga da Justiça 2',
      lancamento: '22/10/2024',
      duracao: '4 h',
      classificacao: 16,
      cartaz: 'https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2021/03/23/1572893681-justiceleaguecovercustomtextless.jpg',
      generos: ['acao','fantasia','aventura'],
      pagina: '/liga-da-justiça'
    }
    {
      nome: 'Liga da Justiça 3',
      lancamento: '22/10/2024',
      duracao: '4 h',
      classificacao: 16,
      cartaz: 'https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2021/03/23/1572893681-justiceleaguecovercustomtextless.jpg',
      generos: ['acao','fantasia','aventura'],
      pagina: '/liga-da-justiça'
    }
    {
      nome: 'Liga da Justiça Ultimate',
      lancamento: '22/10/2024',
      duracao: '4 h',
      classificacao: 16,
      cartaz: 'https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2021/03/23/1572893681-justiceleaguecovercustomtextless.jpg',
      generos: ['acao','fantasia','aventura'],
      pagina: '/liga-da-justiça'
    }
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router
    ) { }

    exibirFilme(filme: IFilme) {
      this.dadosService.guardarDados('filme', filme);
      this.route.navigateByUrl('/dados-filme');
    }

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
        },

        {
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
    const toast = await this.toastController.create(
      {
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success'
    }
    );
    toast.present();
  }

}
