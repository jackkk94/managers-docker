
import { Injectable } from "@angular/core";
import { Store } from "@ngxs/store";
import { Subject, tap } from "rxjs";
import { map, skip } from "rxjs/operators";
import { LoggerService } from "../shared/services/logger.service";
import { MeasureService } from "../shared/services/measure.service";

@Injectable({
    providedIn: 'root'
})

export class WrapperService {
    store$ = new Subject();
    measures: number[] = [];

    constructor(
        private store: Store,
        private measureService: MeasureService,
        private loggerService: LoggerService
    ) {
        this.store.select(state=> state.entities.entities).pipe(skip(1)).subscribe((z) => {
            const start = this.measureService.marks[this.measureService.marks.length - 1]?.start;
            const end = this.measureService.end();
            this.measures.push(end);
            this.loggerService.log(start, this.measures.length, end);
            this.store$.next(z);
        }
        )
    }

    dispatch(action: any) {
        this.measureService.start();
        this.store.dispatch(action);
    }
}