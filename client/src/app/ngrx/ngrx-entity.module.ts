import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgrxComponent } from './ngrx.component';
import { EntitiesReducer } from './ngrx-entity.reducer';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { EntityEffects } from './ngrx-entity.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: NgrxComponent
    }]),
    SharedModule,
    StoreModule.forFeature('entityState', EntitiesReducer),
    EffectsModule.forFeature([EntityEffects])
  ],
  declarations: [NgrxComponent]
})
export class NgRxModule { }