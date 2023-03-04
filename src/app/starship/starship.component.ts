import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Starship } from '../app.models';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {
  url!: string;
  starship! : Starship;
  response! : Response;
  constructor(private route: ActivatedRoute, private http: HttpClient,) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.url =  params['url'];
      }
    );
    this.http.get<Starship>(this.url)
    .subscribe((res: Starship) => {
      this.starship = res;
      console.log(this.starship);
    }, error => console.error(error))
  }

}
