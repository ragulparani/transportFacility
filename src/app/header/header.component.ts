import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  drawer : boolean = false
  locations : string[]
  constructor(public login : LoginService, private router : Router, private locationService : LocationService) {
    !login.isLoggedIn() && router.navigate(['/login'])
   }

  ngOnInit() {
    this.locations = this.locationService.getLocations()
  }

  profileChange(){
    let emp = this.login.empData.findIndex(i => i.emp_id == this.login.loggedInUser.emp_id)
    this.login.empData[emp] = this.login.loggedInUser
    this.login.empData = [...this.login.empData]
    this.locationService.profileChange.next(1)
  }

}
