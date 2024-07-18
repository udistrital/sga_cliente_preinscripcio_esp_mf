import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEspaciosComponent } from './listado-espacios.component';

describe('ListadoEspaciosComponent', () => {
  let component: ListadoEspaciosComponent;
  let fixture: ComponentFixture<ListadoEspaciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoEspaciosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoEspaciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
