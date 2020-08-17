import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RideResultsComponent } from './ride-results.component';

describe('RideResultsComponent', () => {
  let component: RideResultsComponent;
  let fixture: ComponentFixture<RideResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
