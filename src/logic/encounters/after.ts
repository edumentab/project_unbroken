import {GameState} from '../../../types';

export function afterEncounter(state: GameState): GameState {
  return {
    ...state,
    stack: [{type: 'EncounterClear'}, ...state.stack]
  };
}
