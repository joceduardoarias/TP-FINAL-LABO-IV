import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobarcuentaComponent } from './aprobarcuenta.component';

describe('AprobarcuentaComponent', () => {
  let component: AprobarcuentaComponent;
  let fixture: ComponentFixture<AprobarcuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprobarcuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobarcuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
