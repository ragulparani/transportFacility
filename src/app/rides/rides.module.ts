import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTabsModule } from 'ng-zorro-antd/tabs';


import { RidesRoutingModule } from './rides-routing.module';
import { RidesComponent } from './rides/rides.component';
import { RideResultsComponent } from './ride-results/ride-results.component';
import { SharedModule } from '../shared/shared.module';
import { RideRowComponent } from './ride-row/ride-row.component';
import { SearchRideFilterComponent } from './search-ride-filter/search-ride-filter.component';
import { MyRideFilterComponent } from './my-ride-filter/my-ride-filter.component';

@NgModule({
  declarations: [RidesComponent, RideResultsComponent, RideRowComponent, SearchRideFilterComponent, MyRideFilterComponent],
  imports: [
    CommonModule,
    RidesRoutingModule,
    NzTabsModule,
    SharedModule
  ]
})
export class RidesModule { }
