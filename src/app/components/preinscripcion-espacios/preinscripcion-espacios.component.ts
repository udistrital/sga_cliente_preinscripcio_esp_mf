import { Component } from '@angular/core';

@Component({
  selector: 'app-preinscripcion-espacios',
  templateUrl: './preinscripcion-espacios.component.html',
  styleUrl: './preinscripcion-espacios.component.scss'
})
export class PreinscripcionEspaciosComponent {

  periodoAcademico: string = ""
  proyectoCurricular: string = ""
  codigoEstudiante: string = ""

  ngOnInit(): void {

  }

  cargarPeriodoAcademico(){
    
  }
}
