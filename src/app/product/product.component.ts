import { Component } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  movielist: any;
  movies: any;
  constructor(public rest:RestService) { }

  showListMovies(){
    this.rest.getListMovies()
    .subscribe((datalist)=>{
      console.log(datalist.data.movies)
      return this.movielist = datalist.data.movies
    })
  }
  showMovies(name){
    this.rest.getMovie(name)
    .subscribe((datamovie)=>{
      console.log(datamovie.data.movies)
      return this.movies = datamovie.data.movies
    })
  }
  handleSubmit(event){
    event.preventDefault();
    const form = new FormData(event.target)
    const name = form.get ('name')
    this.showMovies(name)
  }
  ngOnInit() {
    this.showMovies('Cherokee Creek'),
    this.showListMovies()
  }
}
