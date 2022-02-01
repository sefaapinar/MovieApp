import { MovieService } from './../movie.service';
import { Movie } from '../movie';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  //localhost:4200/detail/2
  @Input() movie:Movie

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getMovie()
  }

  getMovie(): void{
    const id = +this.route.snapshot.paramMap.get('id')
    this.movieService.getMovie(id)
        .subscribe(movie=> this.movie = movie);
  }


  save():void{
    this.movieService.update(this.movie)
        .subscribe(()=>{
            this.location.back();
        })
  }

}
