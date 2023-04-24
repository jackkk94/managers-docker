import { createReducer, createSelector, on } from '@ngrx/store';
import { EntityState } from '../shared/models/Entities';
import { Add, Added } from './ngrx-entity.actions';

export const initialState = {
  entities: [],
} as EntityState;


const _reducer = createReducer(
  initialState,
  on(Added, (state, {payload}) => ({
    entities: [...state.entities, payload]
  }))
);

export function EntitiesReducer(state, action) {
  return _reducer(state, action);
}