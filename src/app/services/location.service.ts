import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const locations = ['HSR','Hebbal','Koramangala','Richmond Circle','MG Road','Bellandur','Whitefield','Electronic City','Sarjapur','Bommanahalli','Jakkasandra','Indira Nagar','Ulsoor','Varthur','Tavarekare']

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  public profileChange = new BehaviorSubject(1)
  constructor() { }

  getLocations  = ()  => {
    return locations
  }
}
