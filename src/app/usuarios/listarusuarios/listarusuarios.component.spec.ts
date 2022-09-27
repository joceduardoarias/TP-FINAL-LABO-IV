import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarusuariosComponent } from './listarusuarios.component';

describe('ListarusuariosComponent', () => {
  let component: ListarusuariosComponent;
  let fixture: ComponentFixture<ListarusuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarusuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
