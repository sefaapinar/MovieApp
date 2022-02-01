import { MovieService } from './../movie.service';
import { Component } from "@angular/core";    //Yeni Oluşturuldu.
import { Movie } from "../movie";
import { MovieService } from "../movie.service";

@Component({
  selector: 'movies',  //<movies></movies>
  templateUrl: 'movies.component.html'

})
export class MoviesComponent {
      title = 'Movie List'
      movies: Movie[];
      selectedMovie = Movie;

      /**
       *
       */
      constructor(private movieService:MovieService) {


      }
      ngOnInit(): void{
        this.getMovies();
      }

      onSelect(movie:Movie): void {
          this.selectedMovie = movie;
      }

      getMovies():void{
        this.movieService.getMovies();
            .subscribe(movies=>{
            this.movies =movies;
            })

      }


}
