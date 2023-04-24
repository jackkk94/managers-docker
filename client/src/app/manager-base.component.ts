import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppRoutes } from './app-routing.module';
import { ChartPoint } from './shared/components/scatter-chart/scatter-chart.component';
import { LocalStorageService } from './shared/services/local-storage.service';
import { LoggerService } from './shared/services/logger.service';
import { MeasureService } from './shared/services/measure.service';

@Component({
  selector: 'app-manager',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export abstract class ManagerComponent {
  public entitiesCount: number;
  public chartData: ChartPoint[];
  public abstract name: string;

  constructor(route: ActivatedRoute, private measureService: MeasureService, private loggerService: LoggerService, private localStorageService: LocalStorageService) {
    route.queryParams.subscribe(
      (queryParam: any) => {
        this.entitiesCount = Number(queryParam['entities']);
      }
    );
  }

  protected buildChartData(): ChartPoint[]{
    return this.loggerService.data.map(v => ({x: v.start, y: v.duration}) as ChartPoint)
  }

  protected saveResult(): void{
    this.localStorageService.setData(this.name, this.loggerService.data)
  }
}
