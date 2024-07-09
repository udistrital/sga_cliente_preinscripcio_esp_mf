import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { getSingleSpaExtraProviders } from 'single-spa-angular';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { PreinscripcionEspaciosComponent } from './components/preinscripcion-espacios/preinscripcion-espacios.component';
import { ListadoEspaciosComponent } from './components/listado-espacios/listado-espacios.component';


const routes: Routes = [
  { path: "listados-espacios-academicos", component: ListadoEspaciosComponent },
  { path: "espacios-academicos", component: PreinscripcionEspaciosComponent },
  { path: "", component: PreinscripcionEspaciosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ 
    provideRouter(routes),
    { provide: APP_BASE_HREF, useValue: '/preinscripciones/' },
    getSingleSpaExtraProviders(),
    provideHttpClient(withFetch()) ]
})
export class AppRoutingModule { }
