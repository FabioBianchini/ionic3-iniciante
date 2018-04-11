import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private baseAPIPath = "https://api.themoviedb.org/3";

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies () {
    return this.http.get(this.baseAPIPath + "/movie/popular?api_key=4f7d6360edc8e697038179979a4d5b05");
  }

}
    