import { Component } from '@angular/core';
import { ParametrosService } from '../../services/parametros.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-preinscripcion-espacios',
  templateUrl: './preinscripcion-espacios.component.html',
  styleUrl: './preinscripcion-espacios.component.scss'
})
export class PreinscripcionEspaciosComponent {

  periodoAcademico: string = ""
  proyectoCurricular: string = ""
  usuario: any
  codigoEstudiantes: string = ""

  displayedColumns: string[] = ['academicSpace', 'semester', 'credits', 'description', 'selection'];
  dataSource: any[] = [
    { academicSpace: 'Matemáticas', semester: 1, credits: 5, description: 'Obligatoria', selection: false },
    { academicSpace: 'Física', semester: 2, credits: 4, description: 'Preinscrita', selection: false },
    { academicSpace: 'Química', semester: 3, credits: 3, description: 'Disponible', selection: false },
    { academicSpace: 'Biología', semester: 4, credits: 4, description: 'Obligatoria', selection: false },
    { academicSpace: 'Historia', semester: 5, credits: 2, description: 'Disponible', selection: false }
  ];

  constructor(
    private sgaParametrosService: ParametrosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.CargarPeriodoAcademico()
    this.ObtenerCodigoEstudiante()
  }

  CargarPeriodoAcademico() {
    this.sgaParametrosService.get('periodo?query=Activo:true,CodigoAbreviacion:PA&limit=0').subscribe(
      (Response: any) => {
        if (Response.Status == "200" && Response.Success == true) {
          this.periodoAcademico = Response.Data[0].Nombre
        }
      }
    )
  }

  CargarProyectoCurricular() {
    //Cómo cargar el proyecto?
  }

  ObtenerCodigoEstudiante() {
    if (window.localStorage.getItem("user")) {
      const userLocalStorageEncode = window.localStorage.getItem('user');
      const userLocalStorage = userLocalStorageEncode
        ? JSON.parse(atob(userLocalStorageEncode))
        : null;
      this.usuario = userLocalStorage;
      console.log(this.usuario)
    }

  }

  ButtonHandler() {
    this.router.navigate(['/listados-espacios-academicos'])
  }
}
