import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InpNameComponent } from './inp-name.component';

describe('InpNameComponent', () => {
  let component: InpNameComponent;
  let fixture: ComponentFixture<InpNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InpNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InpNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
