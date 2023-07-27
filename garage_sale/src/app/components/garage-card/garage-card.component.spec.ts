import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageCardComponent } from './garage-card.component';

describe('GarageCardComponent', () => {
  let component: GarageCardComponent;
  let fixture: ComponentFixture<GarageCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GarageCardComponent]
    });
    fixture = TestBed.createComponent(GarageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
