export interface StarshipI {
    name: String;
    model: String;
  }

export class Starship{
  name: string;
  model: string;
  url: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;  
  crew: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  passengers: string;
  vehicle_class: string;
  constructor(name: string, model: string, url: string, cargo_capacity: string,    
    consumables: string, cost_in_credits: string, crew: string, length: string,
    manufacturer: string, max_atmosphering_speed: string, passengers: string, vehicle_class: string){
      this.name = name;
      this.model = model;
      this.url = url;
      this.cargo_capacity = cargo_capacity;
      this.consumables = consumables;
      this.cost_in_credits = cost_in_credits;
      this.crew = crew;
      this.length = length;
      this.manufacturer = manufacturer;
      this.max_atmosphering_speed = max_atmosphering_speed;
      this.passengers = passengers;
      this.vehicle_class = vehicle_class;
  }
}

export class Response{
  count: string;
  next: string;
  previous: any;
  results: Starship[];

  constructor( count: string, next: string, previous: any, results: Starship[]){
      this.count = count;
      this.next = next;
      this.previous = previous;
      this.results = results;
  }
}

export interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
}