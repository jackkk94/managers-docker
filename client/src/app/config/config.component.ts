import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from '../app-routing.module';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { ILog } from '../shared/services/logger.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigComponent {
  public ngXsRoute = AppRoutes.NgXs;
  public ngRxRoute = AppRoutes.NgRx;

  public entitiesCount = 1000;
  public selectedManager = AppRoutes.NgRx;

  constructor(private router: Router) { }

  public handleClick(): void {
    this.router.navigate([`/${this.selectedManager}`], {
      queryParams: {
        'entities': this.entitiesCount
      }
    })
  }

  public onDataTypeChange(value: AppRoutes): void {
    this.selectedManager = value;
  }
}
