import {EncounterName, GameState, StateResources} from '../../../types';
import {maxResources, encounters} from '../../data/';

export function performEncounter(state: GameState): GameState {
  let encounter = encounters[state.encounters.revealed[state.encounters.selected]];
  let cost = {
    ...encounter.cost,
    time: encounter.cost.time + (state.conditions.crippled ? 1 : 0)
  }
  return {
    ...state,
    stack: [{type: 'EncounterAfter'}, ...state.stack],
    encounters: {
      ...state.encounters,
      committed: !!cost.commit
    },
    resources: Object.keys(state.resources).reduce((mem, key) => ({
      ...mem,
      [key]: Math.max(
        0,
        Math.min(
          maxResources[key],
          state.resources[key] - (cost[key] || 0) + (encounter.effect[key] || 0)
        )
      )
    }), maxResources)
  };
}
