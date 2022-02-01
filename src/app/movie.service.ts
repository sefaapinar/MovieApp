import { LoggingService } from './logging.service';
import { Movie } from './movie';
import { Injectable } from '@angular/core';
import { Movies } from './movie.datasource';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiMoviesUrl = 'api/movies';


  constructor(private loggingService: LoggingService,
    private http: HttpClient) { }


  getMovies(): Observable<Movie[]> {
    this.loggingService.add('MovieService: listing movies')
    return this.http.get<Movie[]>(this.apiMoviesUrl)
  }

  getMovie(): Observable<Movie>{
    this.loggingService.add('MovieService: getdetail by id ='+ id)
    return of(Movies.find(movie=>movie.id ===id));
  }
}
