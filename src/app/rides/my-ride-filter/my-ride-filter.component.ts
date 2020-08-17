import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RideType } from 'src/app/models/employee.model';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-my-ride-filter',
  templateUrl: './my-ride-filter.component.html',
  styleUrls: ['./my-ride-filter.component.scss']
})
export class MyRideFilterComponent implements OnInit {
  @Output() filterChanged = new EventEmitter()
  rideType : RideType = RideType.OFFER
  constructor(private commonService : CommonService ) { }

  ngOnInit() {
    this.commonService.booking.subscribe(val => {
      this.rideTypeChange()
    })
    this.rideTypeChange()
  }

  rideTypeChange(){
    this.filterChanged.emit({offered : this.rideType == RideType.OFFER})
  }

}
