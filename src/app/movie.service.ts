import { LoggingService } from './logging.service';
import { Movie } from './movie';
import { Injectable } from '@angular/core';
import { Movies } from './movie.datasource';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {



  constructor(private loggingService: LoggingService) { }


  getMovies(): Observable<Movie[]> {
    this.loggingService.add('MovieService: listing movies')
    return of(Movies);
  }

  getMovie(): Observable<Movie>{
    this.loggingService.add('MovieService: getdetail by id ='+ id)
    return of(Movies.find(movie=>movie.id ===id));
  }
}
