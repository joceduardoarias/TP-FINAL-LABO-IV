import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnofinalizadolapsoComponent } from './turnofinalizadolapso.component';

describe('TurnofinalizadolapsoComponent', () => {
  let component: TurnofinalizadolapsoComponent;
  let fixture: ComponentFixture<TurnofinalizadolapsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnofinalizadolapsoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnofinalizadolapsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
