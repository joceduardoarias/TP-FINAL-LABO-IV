import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnopacienteComponent } from './turnopaciente.component';

describe('TurnopacienteComponent', () => {
  let component: TurnopacienteComponent;
  let fixture: ComponentFixture<TurnopacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnopacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnopacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
