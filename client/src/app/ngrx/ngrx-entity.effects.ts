import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of, delay } from 'rxjs';
import { map, mergeMap, catchError, switchMap, exhaustMap, tap } from 'rxjs/operators';
import { Add, Added } from './ngrx-entity.actions';

@Injectable()
export class EntityEffects {
    addEntity$ = createEffect(() => this.actions$.pipe(
        ofType(Add),
        mergeMap(({ payload }) => of(payload).pipe(delay(1))
            .pipe(
                map(entity => Added({ payload: entity }))
            ))
    )
    );

    constructor(
        private actions$: Actions
    ) { }
}