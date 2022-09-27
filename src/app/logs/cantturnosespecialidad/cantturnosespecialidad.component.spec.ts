import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantturnosespecialidadComponent } from './cantturnosespecialidad.component';

describe('CantturnosespecialidadComponent', () => {
  let component: CantturnosespecialidadComponent;
  let fixture: ComponentFixture<CantturnosespecialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantturnosespecialidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CantturnosespecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
