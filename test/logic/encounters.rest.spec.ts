import * as test from "tape";
import {testState} from '../helpers';

import {GameState, Event} from '../../types';
import {tick} from '../../src/logic';

test('resting through encounters works as expected', t => {

  {
    const start = testState({
      resources: {
        smallEffort: 2,
        time: 3,
        cunning: 5,
        mediumEffort: 5,
      },
      encounters: {
        revealed: ['crypticMarkings'], // cost {time: 2, mediumEffort: 1}, gives {cunning: 2}
        selected: 0
      },
      stack: [{type: 'EncounterRest'}, {type: '_TestEvent'}]
    });
  
    const result = tick(start);
  
    const expected = testState({
      resources: {
        smallEffort: 4,
        time: 1,
        cunning: 5,
        mediumEffort: 5,
      },
      encounters: start.encounters,
      stack: [{type: 'EncounterAfter'}, {type: '_TestEvent'}]
    });
    
    t.deepEqual(result, expected, 'encounter time subtracted, small effort gained, after hook queued');
  }

  {
    const start = testState({
      resources: {
        smallEffort: 20,
        time: 1,
      },
      encounters: {
        revealed: ['crypticMarkings'], // cost {time: 2, mediumEffort: 1}, gives {cunning: 2}
        selected: 0
      },
      stack: [{type: 'EncounterRest'}, {type: '_TestEvent'}]
    });
  
    const result = tick(start);
  
    const expected = testState({
      resources: {
        smallEffort: 21,
        time: 0,
      },
      encounters: start.encounters,
      stack: [{type: 'EncounterAfter'}, {type: '_TestEvent'}]
    });
    
    t.deepEqual(result, expected, 'time and small effort stayed within bounds');
  }

  t.end();
});
