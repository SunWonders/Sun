import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanspageComponent } from './planspage.component';

describe('PlanspageComponent', () => {
  let component: PlanspageComponent;
  let fixture: ComponentFixture<PlanspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
