import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarFormComponent } from './core/car-form/car-form.component';


const routes: Routes = [
  { path: 'edit/:id', component: CarFormComponent },
  { path: 'create', component: CarFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
