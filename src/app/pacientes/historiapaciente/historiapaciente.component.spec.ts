import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriapacienteComponent } from './historiapaciente.component';

describe('HistoriapacienteComponent', () => {
  let component: HistoriapacienteComponent;
  let fixture: ComponentFixture<HistoriapacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriapacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriapacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
