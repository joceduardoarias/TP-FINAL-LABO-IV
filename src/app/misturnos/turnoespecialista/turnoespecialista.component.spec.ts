import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoespecialistaComponent } from './turnoespecialista.component';

describe('TurnoespecialistaComponent', () => {
  let component: TurnoespecialistaComponent;
  let fixture: ComponentFixture<TurnoespecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnoespecialistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnoespecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
