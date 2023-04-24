import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { RouterModule } from '@angular/router';
import { ConfigComponent } from './config.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: ConfigComponent
    }]),
  ],
  declarations: [ConfigComponent]
})
export class ConfigModule { }