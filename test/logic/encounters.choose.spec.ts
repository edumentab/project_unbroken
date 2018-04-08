import * as test from "tape";
import {testState} from '../helpers';

import {GameState, Event} from '../../types';
import {tick} from '../../src/logic';

test('choosing an encounter works as expected', t => {

  {
    const start = testState({
      encounters: {
        selected: null,
        revealed: ['suspiciousMushroom', 'slitheringSnake', 'spearFishing'] // cost {metal: 1, time: 2}
      },
      stack: [{type: 'EncounterChoose', index: 2, how: 'perform'}, {type: '_TestEvent'}]
    });
  
    const result = tick(start);
  
    const expected = testState({
      encounters: {
        ...start.encounters,
        selected: 2
      },
      payments: {
        ...start.payments,
        toPay: {metal: 1}
      },
      stack: [{type: 'PayInit'}, {type: 'EncounterPerform'}, {type: '_TestEvent'}]
    });
    
    t.deepEqual(result, expected, 'toPay is set, PayInit and perform is stacked, selected is set');
  }

  {
    const start = testState({
      encounters: {
        selected: null,
        revealed: ['suspiciousMushroom', 'eavesdropping'] // cost {time: 1, commit: true}
      },
      stack: [{type: 'EncounterChoose', index: 1, how: 'perform'}, {type: '_TestEvent'}]
    });
  
    const result = tick(start);
  
    const expected = testState({
      encounters: {
        ...start.encounters,
        selected: 1
      },
      stack: [{type: 'EncounterPerform'}, {type: '_TestEvent'}]
    });
    
    t.deepEqual(result, expected, 'no pay stuff is done if there is no non-time resource cost');
  }

  {
    const start = testState({
      encounters: {
        selected: null
      },
      stack: [{type: 'EncounterChoose', index: 1, how: 'rest'}, {type: '_TestEvent'}]
    });
  
    const result = tick(start);
  
    const expected = testState({
      encounters: {
        selected: 1
      },
      stack: [{type: 'EncounterRest'}, {type: '_TestEvent'}]
    });
    
    t.deepEqual(result, expected, 'rest event is stacked, selected is set');
  }

  t.end();
});
