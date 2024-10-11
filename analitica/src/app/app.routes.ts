import { Routes } from '@angular/router';
import {ReporteComponent} from "./reporte/reporte.component";

export const routes: Routes = [
  { path: 'reporte', component: ReporteComponent },
  { path: '**', redirectTo: '/reporte' }
];
