import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './dashboard/home.component';



const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'dashboard' 
  },
  {
    path: 'dashboard',
    component: HomeComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
