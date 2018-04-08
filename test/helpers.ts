
import {EncounterState, Resources, Skills, Conditions, GameState} from '../types';

import {Omit} from 'type-zoo';

import { minResources } from '../src/data';

type TestStateOpts = Partial< Omit<GameState, 'resources' | 'encounters'> > & {
  encounters?: Partial<EncounterState>,
  resources?: Resources
}

const encounterDefaults: EncounterState = {
  discarded: [],
  revealed: [],
  selected: null,
  committed: false
};

const defaults: GameState = {
  resources: minResources,
  ability: 0,
  skills: {},
  weapon: 'bareHands',
  conditions: {},
  stack: [],
  encounters: encounterDefaults
};

export function testState(opts: TestStateOpts): GameState {
  return {
    ...defaults,
    ...{
      ...opts,
      resources: {
        ...minResources,
        ...opts.resources
      },
      encounters: {
        ...encounterDefaults,
        ...opts.encounters
      }
    }
  };
}
