import {GameState, EncounterChoise, EncounterPerform, EncounterRest, EncounterCost, Resources} from '../../../types';
import {encounters} from '../../data';

export function chooseEncounter(state: GameState, idx: number, how: EncounterChoise): GameState {
  const name = state.encounters.revealed[idx];
  const encounter = encounters[name];
  const newState = {
    ...state,
    encounters: {
      ...state.encounters,
      selected: idx
    }
  };
  if (how === 'rest'){
    return {
      ...newState,
      stack: [{type: 'EncounterRest'}, ...state.stack]
    };
  } else {
    const resourceCost = (Object.keys(encounter.cost) as (keyof EncounterCost)[]).filter(k => k != 'time' && k != 'commit').reduce(
      (mem, resourceName) => ({
        ...mem,
        [resourceName]: encounter.cost[resourceName]
      }),
      {} as Resources
    );
    if (Object.keys(resourceCost).length) {
      return {
        ...newState,
        payments: {
          paid: {},
          toPay: resourceCost
        },
        stack: [{type: 'PayInit'}, {type: 'EncounterPerform'}, ...state.stack]
      }
    } else {
      return {
        ...newState,
        stack: [{type: 'EncounterPerform'}, ...state.stack]
      }
    }
  }
}
