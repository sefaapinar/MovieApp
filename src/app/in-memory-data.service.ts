import { Injectable } from '@angular/core';
import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    const movies= [
      {id:1, name: "movie 1",description: "Good Telephone",imageUrl: "1.jpg"},
      {id:2, name: "movie 2", description: "Bad telephone",imageUrl: "2.jpg"},
      {id:3, name: "movie 3",description: "Great Telephone",imageUrl: "3.jpg"},
      {id:4, name: "movie 4", description: "Rich Telephone", imageUrl: "4.jpg"}

    ]
    return {movies}

  }

  constructor() { }
}
