import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Directives01Component } from './directives01.component';

describe('Directives01Component', () => {
  let component: Directives01Component;
  let fixture: ComponentFixture<Directives01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Directives01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Directives01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
