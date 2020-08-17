import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRideFilterComponent } from './search-ride-filter.component';

describe('SearchRideFilterComponent', () => {
  let component: SearchRideFilterComponent;
  let fixture: ComponentFixture<SearchRideFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRideFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRideFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
