import { state } from '@angular/animations';
import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ManagerComponent } from '../manager-base.component';
import { ChartPoint } from '../shared/components/scatter-chart/scatter-chart.component';
import { Entity } from '../shared/models/Entities';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { LoggerService } from '../shared/services/logger.service';
import { MeasureService } from '../shared/services/measure.service';
import { createEntity } from '../shared/utils/utils';
import { WrapperService } from './manager-wrapper.service';

import { addEntity } from './ngxs-entity.actions';
import { NgXsEntitiesState } from './ngxs-entity.state';

@Component({
  selector: 'app-entity',
  templateUrl: './ngxs.component.html',
  providers: [WrapperService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgXsComponent extends ManagerComponent implements OnInit{
  
  @Select(state=> state.entities.entities) entities$: Observable<Entity[]>;

  public name = 'ngxs';

  constructor(route: ActivatedRoute, private store: Store, measureService: MeasureService, private wrapperManager: WrapperService, loggerService: LoggerService,  localStorageService: LocalStorageService) {
    super(route, measureService, loggerService, localStorageService);
    this.wrapperManager.store$.subscribe((z: Entity) => {
      if (this.wrapperManager.measures.length < this.entitiesCount) {
        this.wrapperManager.dispatch(new addEntity(createEntity(z)));
      } else {
        this.chartData = this.buildChartData();
        this.saveResult();
      }
    })
  }

  public ngOnInit(): void {
    this.wrapperManager.dispatch(new addEntity(createEntity(undefined)));
  }
}
