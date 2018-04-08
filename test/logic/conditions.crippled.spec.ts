import * as test from "tape";
import {testState} from '../helpers';

import {GameState, Event} from '../../types';
import {tick} from '../../src/logic';

test('the crippled condition', t => {

  {
    const start = testState({
      conditions: {
        crippled: true
      },
      resources: {
        smallEffort: 2,
        time: 5,
      },
      encounters: {
        revealed: ['crypticMarkings'], // cost {time: 2, mediumEffort: 1}, gives {cunning: 2}
        selected: 0
      },
      stack: [{type: 'EncounterRest'}, {type: '_TestEvent'}]
    });
  
    const result = tick(start);
  
    const expected = testState({
      ...start,
      resources: {
        smallEffort: 4,
        time: 2,
      },
      stack: [{type: 'EncounterAfter'}, {type: '_TestEvent'}]
    });
    
    t.deepEqual(result, expected, 'resting cost 1 extra time');
  }

  {
    const start = testState({
      conditions: {
        crippled: true
      },
      resources: {
        mediumEffort: 2,
        time: 5,
        cunning: 3
      },
      encounters: {
        revealed: ['crypticMarkings'], // cost {time: 2, mediumEffort: 1}, gives {cunning: 2}
        selected: 0
      },
      stack: [{type: 'EncounterPerform'}, {type: '_TestEvent'}]
    });
  
    const result = tick(start);
  
    const expected = testState({
      ...start,
      resources: {
        mediumEffort: 2,
        time: 2,
        cunning: 5
      },
      stack: [{type: 'EncounterAfter'}, {type: '_TestEvent'}]
    });
    
    t.deepEqual(result, expected, 'performing encounters cost 1 extra time');
  }

  t.end();
});
