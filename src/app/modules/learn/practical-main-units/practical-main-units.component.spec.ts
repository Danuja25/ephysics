import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticalMainUnitsComponent } from './practical-main-units.component';

describe('PracticalMainUnitsComponent', () => {
  let component: PracticalMainUnitsComponent;
  let fixture: ComponentFixture<PracticalMainUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticalMainUnitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticalMainUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
