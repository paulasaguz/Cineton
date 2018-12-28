import { Component } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(public rest:RestService) { }
  showListMovies(){
    this.rest.getListMovies()
    .subscribe((data)=>{
      console.log(data.data.movies)
      return this.movielist = data.movies
    })
  }
  showMovies(name){
    this.rest.getMovie(name)
    .subscribe((data)=>{
      console.log(data.data.movies)
      return this.movies = data.data.movies
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
