import { createSelector } from "@ngrx/store";
import { EntityState } from "../shared/models/Entities";


export interface NgRxState {
  entityState: EntityState;
}

export const selectEntities = createSelector(
  (state: NgRxState) => state.entityState,
  (state: EntityState) => state.entities
);
