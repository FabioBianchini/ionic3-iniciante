import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from "../../providers/movie/movie";


/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public objeto_feed = {
    titulo: "Sirens - Pearl Jam Tribute",
    data: "01 de Novembro de 2017",
    descricao: "Aplicativo da Sirens PJ Tribute",
    qntd_likes: 12,
    qntd_comments: 6,
    time_comment: "11h ago"
  }
 
  public lista_filmes = new Array<any>();

  public nome_usuario : string = "Fabio Bianchini";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider
    ) {
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data => {
        const response = (data as any);
        this.lista_filmes = response.results;
        console.log(this.lista_filmes);    
      }, error => {
        console.log(error);
      }
  
    )

  }

}
