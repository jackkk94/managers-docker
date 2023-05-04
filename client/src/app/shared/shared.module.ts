import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MeasureService } from './services/measure.service';
import { LoggerService } from './services/logger.service';
import { ScatterChartComponent } from './components/scatter-chart/scatter-chart.component';
import { ChartsModule } from 'ng2-charts';
import { LocalStorageService } from './services/local-storage.service';
import { UserPhotoComponent } from './components/user-photo/user-photo.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { MultiselectComponent } from './components/multiselect/multiselect.component';
import { MaterialModule } from './material-module';


const DECLARATIONS = [
  ProgressBarComponent,
  ScatterChartComponent,
  UserPhotoComponent,
  InputTextComponent,
  MultiselectComponent
];

const PROVIDERS = [
  MeasureService,
  LoggerService,
  LocalStorageService
];

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [
    ...PROVIDERS
  ],
  exports: [...DECLARATIONS, FormsModule,ReactiveFormsModule,  MaterialModule, ChartsModule],
  declarations: [...DECLARATIONS]
})
export class SharedModule { }