import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelDetailViewComponent } from './travel-detail-view.component';

describe('TravelDetailViewComponent', () => {
  let component: TravelDetailViewComponent;
  let fixture: ComponentFixture<TravelDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelDetailViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
