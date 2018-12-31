import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RestService {
  constructor(private http: HttpClient) {}

  getListMovies(){
    return this.http.get(`https://yts.am/api/v2/list_movies.json`)
  }
  getMovie(name: any){
    return this.http.get(`https://yts.am/api/v2/list_movies.json?limit=1&query_term=${name}`)
  }
}
