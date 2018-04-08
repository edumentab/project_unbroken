import {EncounterName, EncounterChoise} from './';

export type _TestEvent = {type: '_TestEvent'};

export type EncounterAfter = {type: 'EncounterAfter'};
export type EncounterChoose = {type: 'EncounterChoose', index: number, how: EncounterChoise};
export type EncounterClear = {type: 'EncounterClear'};
export type EncounterPerform = {type: 'EncounterPerform'};
export type EncounterRest = {type: 'EncounterRest'};

export type Event =
  | _TestEvent
  | EncounterAfter
  | EncounterChoose
  | EncounterClear
  | EncounterPerform
  | EncounterRest
;
