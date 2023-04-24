import { createAction, props } from '@ngrx/store';
import { Entity } from '../shared/models/Entities';


export const Add = createAction('[Entity] Add', props<{payload:Entity}>());
export const Added = createAction('[Entity] Add success', props<{payload:Entity}>());