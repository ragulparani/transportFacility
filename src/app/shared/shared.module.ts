import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDefinition } from '@ant-design/icons-angular';
import { SwapOutline } from '@ant-design/icons-angular/icons';
import { NzIconModule, NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS } from 'ng-zorro-antd/icon';

import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

import { FormsModule } from '@angular/forms';
import { SelectTimeComponent } from '../select-time/select-time.component';
import { LocationComponent } from '../location/location.component';

const icons: IconDefinition[] = [ SwapOutline ];


@NgModule({
  declarations: [
    LocationComponent,
    SelectTimeComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    NzMessageModule,
    NzDividerModule,
    NzModalModule,
    NzInputNumberModule,
    NzTimePickerModule,
    NzDatePickerModule,
    NzSelectModule,
    NzDrawerModule,
    NzIconModule
  ],
  exports : [
    CommonModule,
    FormsModule,
    NzMessageModule,
    NzDividerModule,
    NzModalModule,
    NzInputNumberModule,
    NzTimePickerModule,
    NzDatePickerModule,
    NzSelectModule,
    NzDrawerModule,
    NzIconModule,
    LocationComponent,
    SelectTimeComponent
  ],
  providers: [
    { provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: '#3ba67a' }, // If not provided, Ant Design's official blue would be used
    { provide: NZ_ICONS, useValue: icons }
  ],
})
export class SharedModule { }
