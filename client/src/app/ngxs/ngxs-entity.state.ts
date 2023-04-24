import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { of, delay, tap } from 'rxjs';

import { Entity, EntityState } from '../shared/models/Entities';
import { addedEntity, addEntity } from './ngxs-entity.actions';


@State<EntityState>({
  name: 'entities',
  defaults: { entities: [] }
})

@Injectable()
export class NgXsEntitiesState {
  @Action(addEntity)
  addEntity(ctx: StateContext<EntityState>, { payload }: addedEntity) {
    return of(payload).pipe(delay(1), tap(entity => ctx.dispatch(new addedEntity(entity))))
  }

  @Action(addedEntity)
  addedEntity(ctx: StateContext<EntityState>, { payload }: addedEntity) {
    ctx.setState((state) => ({
      entities: [...state.entities, payload]
    }))
  }
}