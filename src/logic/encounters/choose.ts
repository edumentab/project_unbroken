import {GameState, EncounterChoise, EncounterPerform, EncounterRest} from '../../../types';

export function chooseEncounter(state: GameState, idx: number, how: EncounterChoise): GameState {
  const name = state.encounters.revealed[idx];
  return {
    ...state,
    encounters: {
      ...state.encounters,
      selected: idx
    },
    stack: [{type: how === 'perform' ? 'EncounterPerform' : 'EncounterRest'} as EncounterPerform | EncounterRest, ...state.stack]
  };
}
