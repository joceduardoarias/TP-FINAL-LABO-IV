import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirEspecialistaComponent } from './elegir-especialista.component';

describe('ElegirEspecialistaComponent', () => {
  let component: ElegirEspecialistaComponent;
  let fixture: ComponentFixture<ElegirEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElegirEspecialistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElegirEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
