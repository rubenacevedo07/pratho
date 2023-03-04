import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { Starship, StarshipI, Response } from './app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'starships';
  starships! : Starship[];
  response! : Response;

  constructor(private http: HttpClient, private service:AppService){} 

  ngOnInit(){ 
    this.loadStarships();
  }

  loadStarships() {    
    this.http.get<Response>('https://swapi.dev/api/starships')
      .subscribe((res: Response) => {
        this.response = res;
        this.starships = res.results;
      }, error => console.error(error))
  }
}

  