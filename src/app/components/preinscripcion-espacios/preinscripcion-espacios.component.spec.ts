import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreinscripcionEspaciosComponent } from './preinscripcion-espacios.component';

describe('PreinscripcionEspaciosComponent', () => {
  let component: PreinscripcionEspaciosComponent;
  let fixture: ComponentFixture<PreinscripcionEspaciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreinscripcionEspaciosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreinscripcionEspaciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
