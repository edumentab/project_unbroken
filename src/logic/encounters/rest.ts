import {EncounterName, GameState, StateResources} from '../../../types';
import {maxResources, encounters} from '../../data/';

export function restEncounter(state: GameState): GameState {
  let encounter = encounters[state.encounters.revealed[state.encounters.selected]];
  return {
    ...state,
    stack: [{type: 'EncounterAfter'}, ...state.stack],
    resources: {
      ...state.resources,
      time: Math.max(
        0,
        state.resources.time - encounter.cost.time
      ),
      smallEffort: Math.min(
        maxResources.smallEffort,
        state.resources.smallEffort + encounter.cost.time
      )
    }
  };
}
