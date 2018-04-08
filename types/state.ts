import {EncounterState, WeaponName, Resources, Monster, Range0to4, Skills, Conditions, Event} from './';

import {Required} from 'type-zoo';

export type StateResources = Required<Resources>;

export type GameState = {
  resources: StateResources,
  monster?: Monster,
  ability: Range0to4
  skills: Skills
  weapon: WeaponName
  conditions: Conditions,
  stack: Event[],
  encounters: EncounterState,
  payments: {
    toPay: Resources,
    paid: Resources
  }
};
