import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductChild02Component } from './product-child02.component';

describe('ProductChild02Component', () => {
  let component: ProductChild02Component;
  let fixture: ComponentFixture<ProductChild02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductChild02Component]
    });
    fixture = TestBed.createComponent(ProductChild02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
