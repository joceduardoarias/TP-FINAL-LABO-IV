import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoadministradorComponent } from './turnoadministrador.component';

describe('TurnoadministradorComponent', () => {
  let component: TurnoadministradorComponent;
  let fixture: ComponentFixture<TurnoadministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnoadministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnoadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
