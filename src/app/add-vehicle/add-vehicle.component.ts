import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Employee, Vehicle, VehicleType } from '../models/employee.model';
import { NzMessageService } from "ng-zorro-antd/message";
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {
  @Input() employee : Employee;
  @Input() selectedVehicle : Vehicle;
  @Output() vehicleChanged = new EventEmitter()
  get vehicleName(){
    if(this.selectedVehicle){
      return ` ${this.selectedVehicle.vehicle_type} | ${this.selectedVehicle.vehicle_num} | ${this.selectedVehicle.seats}`
    } else {
      return "Add Vehicle"
    }
  }
  isVisible = false
  editVehicle : Vehicle
  veh_num : string
  mode = -1
  constructor(private message : NzMessageService, private login : LoginService) { }

  ngOnInit() {
    if(this.employee.vehicles&& this.employee.vehicles.length){
      this.selectedVehicle = this.editVehicle = this.employee.vehicles[0]
      this.vehicleChanged.emit(this.selectedVehicle)
      this.mode = 0
      this.veh_num = this.selectedVehicle.vehicle_num
    } else {
      this.editVehicle = new Vehicle()
      this.mode = -1
    }
  }

  addVehicle(){
    this.isVisible = true
    this.editVehicle = new Vehicle()
    this.mode = -1
    this.veh_num = "--add--vehicle--"
  }

  handleCancel(){
    this.isVisible = false
  }

  handleOk(){
  if((this.editVehicle.vehicle_type == VehicleType.BIKE && this.editVehicle.seats !== 1) || 
  (this.editVehicle.vehicle_type == VehicleType.CAR && this.editVehicle.seats > 5) ||
  (this.editVehicle.vehicle_num.trim().length == 0)
   ) {
     this.message.error('Fill all required information')
   } else {
     if(this.employee.vehicles && this.employee.vehicles.length > 0 && this.mode > 0){
      this.employee.vehicles[this.mode] = this.editVehicle
     } else {
       this.employee.vehicles = [...this.employee.vehicles || [],this.editVehicle]
       this.mode = this.employee.vehicles.length - 1
     }
     this.login.empData = this.login.empData.map(i => {
       return i.emp_id == this.employee.emp_id ? this.employee : i
     })
     this.vehicleChanged.emit(this.editVehicle)
     this.veh_num = this.editVehicle.vehicle_num
     this.isVisible = false
   }
  }

  vehicleChange(e){
    if(e == "--add--vehicle--"){
      this.addVehicle()
    } else {
      this.editVehicle = {...this.employee.vehicles.find(i => i.vehicle_num == e)}
    }
  }
}
