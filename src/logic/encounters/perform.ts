import {EncounterName, GameState, StateResources} from '../../../types';
import {maxResources, encounters} from '../../data/';

export function performEncounter(state: GameState): GameState {
  let encounter = encounters[state.encounters.revealed[state.encounters.selected]];
  return {
    ...state,
    stack: [{type: 'EncounterAfter'}, ...state.stack],
    encounters: {
      ...state.encounters,
      committed: !!encounter.cost.commit
    },
    resources: {
      ...Object.keys(state.resources).reduce((mem, key) => ({
        ...mem,
        [key]: Math.min(
          maxResources[key],
          state.resources[key] + (encounter.effect[key] || 0)
        )
      }), {} as StateResources),
      time: Math.max(
        0,
        state.resources.time - encounter.cost.time - (state.conditions.crippled ? 1 : 0)
      )
    }
  };
}
