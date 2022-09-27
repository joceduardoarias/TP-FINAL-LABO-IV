import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnosprincipalComponent } from './turnosprincipal.component';

describe('TurnosprincipalComponent', () => {
  let component: TurnosprincipalComponent;
  let fixture: ComponentFixture<TurnosprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnosprincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnosprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
