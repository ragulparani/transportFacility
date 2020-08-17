import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { NzMessageService } from "ng-zorro-antd/message";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emp_id : number;
  constructor(public login : LoginService, public message : NzMessageService, public router : Router) { }

  ngOnInit() {
  }

  logIn(){
    this.login.login(this.emp_id) ? this.router.navigate(['/home']) : this.message.error('Employee id does not exist')
  }
}
