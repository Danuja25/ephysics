import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubUnitsComponent } from './sub-units.component';

describe('SubUnitsComponent', () => {
  let component: SubUnitsComponent;
  let fixture: ComponentFixture<SubUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubUnitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
