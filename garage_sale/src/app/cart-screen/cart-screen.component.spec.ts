import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartScreenComponent } from './cart-screen.component';

describe('CartScreenComponent', () => {
  let component: CartScreenComponent;
  let fixture: ComponentFixture<CartScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartScreenComponent]
    });
    fixture = TestBed.createComponent(CartScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
