import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { LoginService } from 'src/app/services/login.service';
import { VehicleType } from 'src/app/models/employee.model';

@Component({
  selector: 'app-search-ride-filter',
  templateUrl: './search-ride-filter.component.html',
  styleUrls: ['./search-ride-filter.component.scss']
})
export class SearchRideFilterComponent implements OnInit {
  @Output() filterChanged = new EventEmitter()
  locationDetails = new BehaviorSubject({
    pickUp : undefined,
    destination : undefined
  })
  vehicle_type = new BehaviorSubject(VehicleType.BOTH)
  seats = new BehaviorSubject(1);
  time = new BehaviorSubject(new Date()) ;
  vehicle_type$ = this.vehicle_type.asObservable()
  locationDetails$ = this.locationDetails.asObservable()
  seats$ = this.seats.asObservable()
  time$ = this.time.asObservable()
  visible = false;
  constructor(private route : ActivatedRoute, private commonService : CommonService, public login : LoginService) { }

  ngOnInit() {
    this.commonService.booking.subscribe(val => {
      this.refresh()
    })
    this.route.queryParams.subscribe(params=>{
      if(params.search){
        this.locationDetails.next({pickUp : params.pickUp,destination : params.destination})
        this.time.next(new Date(params.time))
        this.seats.next(Number(params.seats))
        this.vehicle_type.next(VehicleType.BOTH)
      } else {
      this.locationDetails.next({pickUp : undefined,destination : undefined})
      this.time.next(new Date())
      this.seats.next(1)
      this.vehicle_type.next(VehicleType.BOTH)
      }
      this.visible = true
    })
    combineLatest([this.locationDetails$,this.time$,this.seats$, this.vehicle_type$]).subscribe(([locationDetails,time,seats,vehicle_type])=> {
      this.filterChanged.emit({locationDetails,time,seats,vehicle_type, search : true})
    })
  }

  refresh(){
    this.locationDetails.next(this.locationDetails.value);
    this.time.next(this.time.value)
    this.seats.next(this.seats.value)
    this.vehicle_type.next(this.vehicle_type.value)
  }

  locationChange(val){
    this.locationDetails.next(val)
  }

  timeChange(val){
    this.time.next(val)
  }

  stepChange(val){
    this.seats.next(val)
  }

  vehicleTypeChange(val){
    this.vehicle_type.next(val)
  }


}
