import { Component, OnInit, Input } from '@angular/core';
import { Ride } from 'src/app/models/employee.model';
import { LoginService } from 'src/app/services/login.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-ride-row',
  templateUrl: './ride-row.component.html',
  styleUrls: ['./ride-row.component.scss']
})
export class RideRowComponent implements OnInit {
  @Input() ride : Ride;
  displayRide : Ride = new Ride();
  canBook : boolean = false
  constructor(private login : LoginService, private commonService : CommonService) { }

  ngOnInit() {
    this.canBook = this.login.loggedInUser.emp_id != this.ride.creator.emp_id && !this.ride.occupied.find(i=> i.emp_id == this.login.loggedInUser.emp_id)
    this.displayRide = {...this.ride}
    this.displayRide.time = new Date(this.ride.time)
  }

  book(){
    let rides : Ride [] = this.commonService.getRides()
    let ride : Ride = rides.find((ride : Ride) => (new Date(ride.time).getTime() == new Date(this.ride.time).getTime()) && ride.creator.emp_id == this.ride.creator.emp_id )
    ride.occupied = [...ride.occupied,this.login.loggedInUser]
    this.commonService.setRides(rides)
  }
}
