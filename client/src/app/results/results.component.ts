import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ChartPoint } from '../shared/components/scatter-chart/scatter-chart.component';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { ILog } from '../shared/services/logger.service';
import { buildExperimentResult, IResult } from '../shared/utils/utils';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsComponent implements OnInit{
  public ngrxResult: IResult;
  public ngxsResult: IResult;


  constructor(private localStorageService: LocalStorageService) { }

  public ngOnInit(): void {
    this.ngrxResult = buildExperimentResult(JSON.parse(this.localStorageService.getData('ngrx')));
    this.ngxsResult = buildExperimentResult(JSON.parse(this.localStorageService.getData('ngxs')));
  }
}
