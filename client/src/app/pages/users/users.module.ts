import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { NgxsModule } from '@ngxs/store';
import { EffectsModule } from '@ngrx/effects';

import { UsersComponent } from './components/users/users.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterByNameComponent } from './components/filter-by-name/filter-by-name.component';
import { FilterByCityComponent } from './components/filter-by-city/filter-by-city.component';
import { UserListComponent } from './components/user-list/user-list.component';

const DECLARATIONS = [
  UsersComponent,
  UserCardComponent,
  FilterByNameComponent,
  FilterByCityComponent,
  UserListComponent,
];
@NgModule({
  declarations: DECLARATIONS,
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent,
      },
    ]),
  ],

  providers: [],
})
export class UsersModule {}
