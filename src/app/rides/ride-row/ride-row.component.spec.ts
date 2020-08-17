import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RideRowComponent } from './ride-row.component';

describe('RideRowComponent', () => {
  let component: RideRowComponent;
  let fixture: ComponentFixture<RideRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
