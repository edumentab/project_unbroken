import * as test from "tape";
import {testState} from '../helpers';

import {GameState, Event} from '../../types';
import {tick} from '../../src/logic';

test('performing encounters works as expected', t => {

  {
    const start = testState({
      resources: {
        mediumEffort: 2,
        time: 3,
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
      resources: {
        mediumEffort: 1,
        time: 1,
        cunning: 5
      },
      encounters: start.encounters,
      stack: [{type: 'EncounterAfter'}, {type: '_TestEvent'}]
    });
    
    t.deepEqual(result, expected, 'encounter cost is subtracted, gains are added, after hook is queued');
  }

  {
    const start = testState({
      resources: {
        mediumEffort: 2,
        time: 1,
        cunning: 6
      },
      encounters: {
        revealed: ['crypticMarkings'], // cost {time: 2, mediumEffort: 1}, gives {cunning: 2}
        selected: 0,
        committed: true
      },
      stack: [{type: 'EncounterPerform'}, {type: '_TestEvent'}]
    });
  
    const result = tick(start);
  
    const expected = testState({
      resources: {
        mediumEffort: 1,
        time: 0,
        cunning: 7
      },
      encounters: {
        ...start.encounters,
        committed: false
      },
      stack: [{type: 'EncounterAfter'}, {type: '_TestEvent'}]
    });
    
    t.deepEqual(result, expected, 'resources stayed within bounds, committed was cleared');
  }

  {
    const start = testState({
      resources: {
        time: 3,
        cunning: 6
      },
      encounters: {
        revealed: ['eavesdropping'], // cost {time: 1, commit: true}, gives {cunning: 1}
        selected: 0
      },
      stack: [{type: 'EncounterPerform'}, {type: '_TestEvent'}]
    });
  
    const result = tick(start);
  
    const expected = testState({
      resources: {
        time: 2,
        cunning: 7
      },
      encounters: {
        ...start.encounters,
        committed: true
      },
      stack: [{type: 'EncounterAfter'}, {type: '_TestEvent'}]
    });
    
    t.deepEqual(result, expected, 'committed was set when we gained it');
  }

  {
    const start = testState({
      resources: {
        time: 3,
        cunning: 6
      },
      encounters: {
        revealed: ['eavesdropping'], // cost {time: 1, commit: true}, gives {cunning: 1}
        selected: 0,
        committed: true
      },
      stack: [{type: 'EncounterPerform'}, {type: '_TestEvent'}]
    });
  
    const result = tick(start);
  
    const expected = testState({
      resources: {
        time: 2,
        cunning: 7
      },
      encounters: {
        ...start.encounters,
        committed: true
      },
      stack: [{type: 'EncounterAfter'}, {type: '_TestEvent'}]
    });
    
    t.deepEqual(result, expected, 'committed was kept when we had it and regained it');
  }

  t.end();
});
