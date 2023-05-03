import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchlangComponent } from './switchlang.component';

describe('SwitchlangComponent', () => {
  let component: SwitchlangComponent;
  let fixture: ComponentFixture<SwitchlangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchlangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchlangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
