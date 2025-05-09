import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q8Component } from './q8.component';

describe('Q8Component', () => {
  let component: Q8Component;
  let fixture: ComponentFixture<Q8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Q8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Q8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
