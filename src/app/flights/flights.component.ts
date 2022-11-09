import { Component, OnInit } from '@angular/core';
import { FlightsService } from './flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  depart: string ="";
  arrival: string ="";

  constructor(private fs:FlightsService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.arrival, this.depart)
  }

}
