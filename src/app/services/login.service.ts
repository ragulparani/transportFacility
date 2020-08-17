import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { BrowserStorageService } from './storage.services';
import { employee } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loggedInUser : Employee;
  private _empData
  public get empData(): Employee[] {
    if(this._empData){
      return this._empData
    } else if(this.storage.get('empData')){
      this._empData = JSON.parse(this.storage.get('empData'))
      return this._empData
    }
    else{
      this.storage.set('empData',JSON.stringify(employee))
      this._empData = employee
      return employee
    }
  }
  public set empData(value: Employee[]) {
    this.storage.set('empData',JSON.stringify(value))
    this._empData = value
  }

  constructor(public storage : BrowserStorageService) { }

  isLoggedIn(){
    this.loggedInUser = this.empData && this.storage.get('loggedInUser') ? this.empData.find(i => i.emp_id === JSON.parse(this.storage.get('loggedInUser')).emp_id) : undefined
    return this.loggedInUser
  }

  login(emp:number){
    this.loggedInUser = this.empData.find(i=>i.emp_id==emp)
    if(this.loggedInUser){
      this.storage.set('loggedInUser',JSON.stringify(this.loggedInUser))
      return true
    } else {
      return false
    }
  }

  logout(){
    this.storage.remove('loggedInUser');
  }
}
