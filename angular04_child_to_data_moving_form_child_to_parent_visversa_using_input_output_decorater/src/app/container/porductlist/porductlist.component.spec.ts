import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorductlistComponent } from './porductlist.component';

describe('PorductlistComponent', () => {
  let component: PorductlistComponent;
  let fixture: ComponentFixture<PorductlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorductlistComponent]
    });
    fixture = TestBed.createComponent(PorductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
