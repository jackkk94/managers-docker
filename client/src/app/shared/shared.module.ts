import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { FormsModule } from '@angular/forms';
import { MeasureService } from './services/measure.service';
import { LoggerService } from './services/logger.service';
import { ScatterChartComponent } from './components/scatter-chart/scatter-chart.component';
import { ChartsModule } from 'ng2-charts';
import { LocalStorageService } from './services/local-storage.service';

const DECLARATIONS = [
  ProgressBarComponent,
  ScatterChartComponent
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
    ChartsModule
  ],
  providers: [
    ...PROVIDERS
  ],
  exports: [...DECLARATIONS, FormsModule, ChartsModule],
  declarations: [...DECLARATIONS]
})
export class SharedModule { }