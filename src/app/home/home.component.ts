import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { RideType, Vehicle, Ride, RideSearch } from '../models/employee.model';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CommonService } from '../services/common.service';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isVisible = false
  rideType : RideType = RideType.TAKE
  locationDetails = {
    pickUp : undefined,
    destination : undefined
  }
  requestSeats : number = 1;
  selectedVehicle : Vehicle;
  time : Date = new Date()
  
  constructor(public login : LoginService, private router: Router, private message : NzMessageService,
     private commonService : CommonService) {
    !login.isLoggedIn() && router.navigate(['/login'])
   }

  ngOnInit() {
    
  }

  vehicleChanged(vehicle : Vehicle){
    this.selectedVehicle = vehicle
  }

  timeChanged(time : Date){
    this.time = time
  }

  addRide(){
    let ride = new Ride()
    ride.destination = this.locationDetails.destination;
    ride.pickUp = this.locationDetails.pickUp;
    ride.creator = this.login.loggedInUser;
    ride.time = this.time;
    ride.vehicle = this.selectedVehicle;
    ride.occupied = []
    this.commonService.setRides([...this.commonService.getRides(),ride])
    this.router.navigate(['/rides'])
  }

  requestRide(){
    let rideReq = new RideSearch();
    rideReq.destination = this.locationDetails.destination
    rideReq.pickUp = this.locationDetails.pickUp;
    rideReq.time = this.time;
    rideReq.seats = this.requestSeats
    this.router.navigate(['/rides'],{queryParams : {...rideReq,search:true}})
  }

  submit(){
    if(!this.locationDetails.pickUp ||
      !this.locationDetails.destination ){
        this.message.error('Please fill in pick up and drop points')
        return ;
      } else if(this.rideType == RideType.OFFER && !this.selectedVehicle){
        this.message.error('Please add/choose a vehicle')
        return ;
      } else if ( this.locationDetails.pickUp == this.locationDetails.destination){
        this.message.error('Pick and drop cannot be the same location')
        return ;
      }
      if(this.rideType == RideType.TAKE){
        this.requestRide()
      } else {
        this.addRide()
      }
  }
}
