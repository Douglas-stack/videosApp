
import { IListaFilmes, IFilmeAPI} from '../models/IFilmeAPI.models';;
import { FilmeService } from './../services/filme.service';
import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/IFilme.model';
import { Component, OnInit } from '@angular/core';
import { AlertController, SelectValueAccessor } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { GeneroService } from '../services/genero.service';
import { IGenero } from '../models/iGeneros.model';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

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
    },
    {
      nome: 'Relatos Mundo',
      lancamento: '22/10/2024',
      duracao: '4 h',
      classificacao: 16,
      cartaz: 'https://br.web.img3.acsta.net/c_310_420/pictures/21/01/28/19/17/1791660.jpg',
      generos: ['acao','fantasia','aventura'],
      pagina: '/liga-da-justiça'
    },
    {
      nome: 'Amor e Monstros',
      lancamento: '22/10/2024',
      duracao: '4 h',
      classificacao: 16,
      cartaz: 'https://br.web.img3.acsta.net/c_310_420/pictures/20/10/01/10/37/5061463.jpg',
      generos: ['acao','fantasia','aventura'],
      pagina: '/liga-da-justiça'
    },
    {
      nome: 'Emma',
      lancamento: '22/10/2024',
      duracao: '4 h',
      classificacao: 16,
      cartaz: 'https://br.web.img2.acsta.net/c_310_420/pictures/19/12/04/14/45/2094218.jpg',
      generos: ['acao','fantasia','aventura'],
      pagina: '/liga-da-justiça'
    }
  ];

  listaFilmes: IListaFilmes;
  generos: string[] = [];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public filmeService: FilmeService,
    public generoService: GeneroService,
    public route: Router
    ) { }

    buscarFilmes(evento: any){

      console.log(evento.target.value);
      const busca = evento.target.value;
      if (busca && busca.trim() !== ''){
        this.filmeService.buscarFilmes(busca).subscribe(dados=>{
          console.log(dados);
          this.listaFilmes = dados;

        });
      }

    }

    exibirFilme(filme: IFilmeAPI) {
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
  ngOnInit(){
    this.generoService.buscarGeneros().subscribe (dados => {
      console.log('Generos: ', dados.genres);
      dados.genres.forEach(genero => {
        this.generos[genero.id]=genero.name;
      });
      this.dadosService.guardarDados('generos', this.generos);
    });
  }

}
