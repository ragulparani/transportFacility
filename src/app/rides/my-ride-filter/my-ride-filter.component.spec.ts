import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRideFilterComponent } from './my-ride-filter.component';

describe('MyRideFilterComponent', () => {
  let component: MyRideFilterComponent;
  let fixture: ComponentFixture<MyRideFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRideFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRideFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
