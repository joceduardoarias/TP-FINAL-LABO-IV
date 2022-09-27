import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnosolicitadolapsoComponent } from './turnosolicitadolapso.component';

describe('TurnosolicitadolapsoComponent', () => {
  let component: TurnosolicitadolapsoComponent;
  let fixture: ComponentFixture<TurnosolicitadolapsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnosolicitadolapsoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnosolicitadolapsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
