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
    loadChildren: () => import('./config/config.module').then(m => m.ConfigModule)
  },
  {
    path: AppRoutes.NgXs,
    loadChildren: () => import('./ngxs/ngxs-entity.module').then(m => m.NgXsModule)
  },
  {
    path: AppRoutes.NgRx,
    loadChildren: () => import('./ngrx/ngrx-entity.module').then(m => m.NgRxModule)
  },
  {
    path: AppRoutes.Results,
    loadChildren: () => import('./results/results.module').then(m => m.ResultsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
