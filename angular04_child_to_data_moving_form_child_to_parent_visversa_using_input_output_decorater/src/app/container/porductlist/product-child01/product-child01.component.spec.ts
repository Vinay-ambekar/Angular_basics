import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductChild01Component } from './product-child01.component';

describe('ProductChild01Component', () => {
  let component: ProductChild01Component;
  let fixture: ComponentFixture<ProductChild01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductChild01Component]
    });
    fixture = TestBed.createComponent(ProductChild01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
