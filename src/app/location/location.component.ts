import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocationService } from '../services/location.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  @Input() employee : Employee
  @Input() locationDetails;
  @Output() locationDetailsChange = new EventEmitter()
  locations : string[]
  constructor(public locationService : LocationService) { }

  ngOnInit() {
    this.locationService.profileChange.subscribe(val => {
      if(this.employee){
        this.locations = this.locationService.getLocations().filter(i => i !== this.employee.home && i!== this.employee.work)
      } else {
        this.locations = this.locationService.getLocations()
      }
    })
  }

  toggleLocation(){
    [this.locationDetails.destination , this.locationDetails.pickUp] = [this.locationDetails.pickUp , this.locationDetails.destination]
    this.locationDetailsChange.emit(this.locationDetails)
  }

}
