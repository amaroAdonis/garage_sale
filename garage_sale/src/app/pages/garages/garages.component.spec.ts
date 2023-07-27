import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaragesComponent } from './garages.component';

describe('GaragesComponent', () => {
  let component: GaragesComponent;
  let fixture: ComponentFixture<GaragesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GaragesComponent]
    });
    fixture = TestBed.createComponent(GaragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
