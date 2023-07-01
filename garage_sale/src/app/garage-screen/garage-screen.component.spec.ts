import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageScreenComponent } from './garage-screen.component';

describe('GaragePageComponent', () => {
  let component: GarageScreenComponent;
  let fixture: ComponentFixture<GarageScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GarageScreenComponent]
    });
    fixture = TestBed.createComponent(GarageScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
