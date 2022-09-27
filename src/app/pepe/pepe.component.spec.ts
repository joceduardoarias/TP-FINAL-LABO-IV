import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PepeComponent } from './pepe.component';

describe('PepeComponent', () => {
  let component: PepeComponent;
  let fixture: ComponentFixture<PepeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PepeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PepeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
