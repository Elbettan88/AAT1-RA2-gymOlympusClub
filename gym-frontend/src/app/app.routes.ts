import { Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { MembresiasComponent } from './components/membresias/membresias.component';

export const routes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'membresias', component: MembresiasComponent },
  { path: '**', redirectTo: 'clientes' }
];
