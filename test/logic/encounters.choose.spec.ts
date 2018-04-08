import * as test from "tape";
import {testState} from '../helpers';

import {GameState, Event} from '../../types';
import {tick} from '../../src/logic';

test('choosing an encounter works as expected', t => {

  {
    const start = testState({
      encounters: {
        selected: null
      },
      stack: [{type: 'EncounterChoose', index: 2, how: 'perform'}, {type: '_TestEvent'}]
    });
  
    const result = tick(start);
  
    const expected = testState({
      encounters: {
        selected: 2
      },
      stack: [{type: 'EncounterPerform'}, {type: '_TestEvent'}]
    });
    
    t.deepEqual(result, expected, 'perform event is stacked, selected is set');
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
