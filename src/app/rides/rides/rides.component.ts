import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.scss']
})
export class RidesComponent implements OnInit {
  selectedTab : number = 1
  constructor(private route : ActivatedRoute, private router : Router, private login : LoginService) {
    !login.isLoggedIn() && router.navigate(['/login'])
   }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedTab =  params['search'] ? 1 : 0
    })
  }

  

}
