export class FlightInfo {

    departure:string
    arrival:string

    constructor(departure:string, arrival: string){
        this.arrival = arrival;
        this.departure= departure;
    }
}

export class Destiantion{

    destinationId:number;
    city:string;
    state:string;
    country:string;
    constructor( destinationId:number, city:string, state:string, country:string){
        this.destinationId = destinationId;
        this.city = city;
        this.state = state;
        this.country = country;
    }

}

export class Flight{

    flightId:number;
    date:Date;
    departure:Destiantion;
    arrival:Destiantion;
    flightNo:string;
    constructor(flightId:number,date:Date,departure:Destiantion,arrival:Destiantion,flightNo:string){

        this.flightId = flightId;
        this.date = date;
        this.departure = departure;
        this.arrival = arrival;
        this.flightNo = flightNo;

    }
}