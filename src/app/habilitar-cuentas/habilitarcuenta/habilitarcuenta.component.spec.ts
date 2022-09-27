import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilitarcuentaComponent } from './habilitarcuenta.component';

describe('HabilitarcuentaComponent', () => {
  let component: HabilitarcuentaComponent;
  let fixture: ComponentFixture<HabilitarcuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilitarcuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilitarcuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
