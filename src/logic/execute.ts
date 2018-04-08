import {Event, GameState} from '../../types';

import {chooseEncounter} from './encounters/choose';
import {clearEncounters} from './encounters/clear';
import {performEncounter} from './encounters/perform';
import {restEncounter} from './encounters/rest';
import {afterEncounter} from './encounters/after';

export function execute(state: GameState, evt: Event): GameState{
  switch(evt.type){
    case "EncounterAfter": return afterEncounter(state);
    case "EncounterChoose": return chooseEncounter(state, evt.index, evt.how);
    case "EncounterClear": return clearEncounters(state);
    case "EncounterPerform": return performEncounter(state);
    case "EncounterRest": return restEncounter(state);
  }
}
