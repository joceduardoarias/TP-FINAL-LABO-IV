import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirHorariosComponent } from './elegir-horarios.component';

describe('ElegirHorariosComponent', () => {
  let component: ElegirHorariosComponent;
  let fixture: ComponentFixture<ElegirHorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElegirHorariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElegirHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
