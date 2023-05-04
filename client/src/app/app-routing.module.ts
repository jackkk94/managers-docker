import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

export enum AppRoutes {
  NgRx = 'ngrx',
  NgXs = 'ngxs',
  Results = 'results'
}

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
