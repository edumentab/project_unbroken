import {GameState} from '../../../types';

export function clearEncounters(state: GameState): GameState {
  return {
    ...state,
    encounters: {
      ...state.encounters,
      selected: null,
      revealed: [],
      discarded: [...state.encounters.discarded, ...state.encounters.revealed]
    }
  };
}
