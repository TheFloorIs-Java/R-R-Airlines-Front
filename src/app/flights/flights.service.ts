import { Injectable, ɵresetJitOptions } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight, FlightInfo } from './flight';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http:HttpClient){ }

  getFlight(flight:FlightInfo):Observable<Flight[]>{
    console.log(flight)
    return this.http.post<Flight[]>('http://localhost:8080/api/flights/', flight);
  }

  getAllFlights(flight:FlightInfo):Observable<Flight[]>{
    return this.http.post<Flight[]>('http://localhost:8080/api/flights/departure', flight)
  }
}
