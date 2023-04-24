import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Add } from './ngrx-entity.actions';
import { Store, select } from '@ngrx/store';
import { selectEntities } from './ngrx-entity.selectors';
import { ManagerComponent } from '../manager-base.component';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';
import { MeasureService } from '../shared/services/measure.service';
import { WrapperService } from './manager-wrapper.service';
import { Entity } from '../shared/models/Entities';
import { createEntity } from '../shared/utils/utils';
import { BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs';
import { LoggerService } from '../shared/services/logger.service';
import { ChartPoint } from '../shared/components/scatter-chart/scatter-chart.component';
import { LocalStorageService } from '../shared/services/local-storage.service';


@Component({
  selector: 'app-entity',
  templateUrl: './ngrx.component.html',
  providers: [WrapperService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrxComponent extends ManagerComponent implements OnInit{
  entities$: Observable<Entity[]>;
  public name = 'ngrx';
  constructor(route: ActivatedRoute, private store: Store, measureService: MeasureService, private wrapperManager: WrapperService, loggerService: LoggerService, localStorageService: LocalStorageService) {
    super(route, measureService, loggerService, localStorageService);
    this.entities$ = this.store.select(selectEntities);
    this.wrapperManager.store$.subscribe((z: Entity) => {
      if (this.wrapperManager.measures.length < this.entitiesCount) {
        this.wrapperManager.dispatch(Add({ payload: createEntity(z) }));
      } else {
        this.chartData = this.buildChartData();
        this.saveResult();
      }
    })
  }

  public ngOnInit(): void {
    this.wrapperManager.dispatch(Add({ payload: createEntity(undefined) }));
  }
}
