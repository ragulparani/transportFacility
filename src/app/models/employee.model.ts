export class Employee{
    emp_id : number;
    name : string;
    vehicles? : Vehicle[] = [];
    home? : string;
    work? : string;
}

export enum RideType{
    OFFER = 'offer',
    TAKE = 'take'
}

export class Vehicle{
    vehicle_type : VehicleType = VehicleType.CAR;
    vehicle_num : string = '';
    seats : number = 1;  
}

export class RideSearch{
    time : Date;
    pickUp : string;
    destination : string;
    seats : number
}

export class Ride{
    time : Date;
    vehicle : Vehicle;
    pickUp : string;
    destination : string;
    occupied : Employee[];
    creator : Employee;
    vacancy?(){
        return this.vehicle.seats - this.occupied.length
    }
}

export enum VehicleType {
    CAR = "car",
    BIKE = "bike",
    BOTH = 'both'
}