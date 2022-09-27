import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirEspecialidadComponent } from './elegir-especialidad.component';

describe('ElegirEspecialidadComponent', () => {
  let component: ElegirEspecialidadComponent;
  let fixture: ComponentFixture<ElegirEspecialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElegirEspecialidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElegirEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
