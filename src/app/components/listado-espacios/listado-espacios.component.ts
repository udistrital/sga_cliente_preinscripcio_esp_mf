import { Component } from '@angular/core';
interface SemestreData {
  [key: string]: {
    espacios_academicos: {
      academicSpace: string;
      credits: number;
      description: string;
      selection: boolean;
    }[];
  };
}

@Component({
  selector: 'app-listado-espacios',
  templateUrl: './listado-espacios.component.html',
  styleUrl: './listado-espacios.component.scss'
})
export class ListadoEspaciosComponent {

  displayedColumns: string[] = ['academicSpace', 'credits', 'description', 'selection'];
  dataSource: SemestreData = {
    semestre_1: {
      espacios_academicos: [
        { academicSpace: 'Matemáticas', credits: 5, description: 'Obligatoria', selection: false },
        { academicSpace: 'Álgebra', credits: 4, description: 'Obligatoria', selection: false }
      ]
    },
    semestre_2: {
      espacios_academicos: [
        { academicSpace: 'Física', credits: 4, description: 'Preinscrita', selection: false },
        { academicSpace: 'Geometría', credits: 3, description: 'Preinscrita', selection: false }
      ]
    },
    semestre_3: {
      espacios_academicos: [
        { academicSpace: 'Química', credits: 3, description: 'Disponible', selection: false },
        { academicSpace: 'Química Orgánica', credits: 4, description: 'Disponible', selection: false }
      ]
    },
    semestre_4: {
      espacios_academicos: [
        { academicSpace: 'Biología', credits: 4, description: 'Obligatoria', selection: false },
        { academicSpace: 'Zoología', credits: 5, description: 'Obligatoria', selection: false }
      ]
    },
    semestre_5: {
      espacios_academicos: [
        { academicSpace: 'Historia', credits: 2, description: 'Disponible', selection: false },
        { academicSpace: 'Geografía', credits: 3, description: 'Disponible', selection: false }
      ]
    }
  };

  SemestreKeys(obj: SemestreData): string[] {
    return Object.keys(obj);
  }

}
