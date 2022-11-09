import { Component, OnInit } from '@angular/core';
import { Flight, FlightInfo } from './flight';
import { FlightsService } from './flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  depart: string ="";
  arrival: string ="";
  currentFlights:Flight[] = [];
  enteredData = false;

  constructor(private fs:FlightsService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.arrival == ''){
      let flight:FlightInfo = new FlightInfo(this.depart, this.arrival);
    this.fs.getAllFlights(flight).subscribe(data => {
      console.log(data)
      this.currentFlights = data;
    })
    this.enteredData = true;
    } else{
      let flight:FlightInfo = new FlightInfo(this.depart, this.arrival);
    this.fs.getFlight(flight).subscribe(data => {
      console.log(data)
      this.currentFlights = data;
    })
    this.enteredData = true;
    }

    

  }

}
