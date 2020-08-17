import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { Ride, RideType } from 'src/app/models/employee.model';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-ride-results',
  templateUrl: './ride-results.component.html',
  styleUrls: ['./ride-results.component.scss']
})
export class RideResultsComponent implements OnInit {
  @Input() template : TemplateRef<any>
  rides : Ride[] = []
  constructor( private commonService : CommonService) {
  }

  ngOnInit() {
  }

  filterChanged(filter){
    this.rides = this.commonService.getRides(filter)
  }
}
