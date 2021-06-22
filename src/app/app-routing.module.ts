import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'm1', loadChildren: () => import('./m1').then(m => m.M1Module) },
  { path: 'm2', loadChildren: () => import('./m2').then(m => m.M2Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
