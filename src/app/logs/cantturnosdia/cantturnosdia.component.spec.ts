import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantturnosdiaComponent } from './cantturnosdia.component';

describe('CantturnosdiaComponent', () => {
  let component: CantturnosdiaComponent;
  let fixture: ComponentFixture<CantturnosdiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantturnosdiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CantturnosdiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
