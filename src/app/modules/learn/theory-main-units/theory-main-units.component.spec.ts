import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoryMainUnitsComponent } from './theory-main-units.component';

describe('TheoryMainUnitsComponent', () => {
  let component: TheoryMainUnitsComponent;
  let fixture: ComponentFixture<TheoryMainUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheoryMainUnitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheoryMainUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
