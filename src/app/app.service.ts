  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable, throwError} from 'rxjs';
  import { map } from 'rxjs/operators';
  import { Starship, StarshipI } from './app.models';
  import { retry, catchError } from 'rxjs/operators';

  @Injectable({
      providedIn: 'root'
    })
  
    export class AppService {
      private url = 'https://swapi.dev/api/starships';
      
      starshipList: Starship[] | undefined;
      
      constructor(private httpClient: HttpClient) { }
      data : any;

  }
     
  
  