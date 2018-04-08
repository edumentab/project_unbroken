import * as test from "tape";
import {testState} from '../helpers';

import {GameState, Event} from '../../types';
import {tick} from '../../src/logic';

test('resting when afraid gains 1 less effort', t => {

  const start = testState({
    conditions: {
      afraid: true
    },
    resources: {
      smallEffort: 2,
      time: 3,
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
      smallEffort: 3,
      time: 1,
    },
    stack: [{type: 'EncounterAfter'}, {type: '_TestEvent'}]
  });
  
  t.deepEqual(result, expected, '1 less effort than normal gained');

  t.end();
});
