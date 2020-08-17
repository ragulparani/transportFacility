import { Injectable, OnDestroy } from '@angular/core';
import { BrowserStorageService } from './storage.services';
import { Ride, VehicleType } from '../models/employee.model';
import { filter } from 'minimatch';
import { LoginService } from './login.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService{
  booking = new BehaviorSubject(1)
  constructor(private storage : BrowserStorageService, private login : LoginService) {
   }

  setRides(rides : Ride[]){
    this.storage.set('rides',JSON.stringify(rides))
    this.booking.next(1)
  }

  getRides = (filters?) : Ride[] =>{
    const rides = JSON.parse(this.storage.get('rides')) || []
    return rides.filter((i : Ride) => {
      if(!filters){
        return true
      }
      if(filters.search){
        if(i.creator.emp_id == this.login.loggedInUser.emp_id || i.occupied.find(j => j.emp_id == this.login.loggedInUser.emp_id)){
          return false
        }
        //check for two hour diff
      if(filters['time']){
          const diff = Math.floor(
            (new Date(filters.time).getTime() - new Date(i.time).getTime())/(1000*60*60)
            )
            if(Math.abs( diff) > 2){
              return false
            }
        }
      if(filters['vehicle_type'] && filters.vehicle_type != VehicleType.BOTH && i.vehicle.vehicle_type !== filters.vehicle_type){
        return false
      }
      } else {
        if(filters.offered && (this.login.loggedInUser.emp_id != i.creator.emp_id)){
          return false
        } else if(!filters.offered && !i.occupied.find(j => j.emp_id == this.login.loggedInUser.emp_id)) {
          return false
        }
      } 
      if(filters['locationDetails'] && filters.locationDetails.pickUp && (i.pickUp !== filters.locationDetails.pickUp)){
        return false
      }
      if(filters['locationDetails'] && filters.locationDetails.destination && (i.destination !== filters.locationDetails.destination)){
        return false
      }
      if(filters['seats'] && ((i.vehicle.seats - i.occupied.length) < filters.seats)){
        return false
      }
      return true
    })
  }
}
