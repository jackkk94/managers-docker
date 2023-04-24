import { Entity } from "../shared/models/Entities";

export class addEntity {
  static readonly type = '[Entity] Add Entity';
  constructor(public payload: Entity) {}
}

export class addedEntity {
  static readonly type = '[Entity] Added Entity success';
  constructor(public payload: Entity) {}
}