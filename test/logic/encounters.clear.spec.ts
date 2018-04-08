import * as test from "tape";
import {testState} from '../helpers';

import {GameState, Event} from '../../types';
import {tick} from '../../src/logic';

test('clearing encounter cards works as expected', t => {

  const start = testState({
    encounters: {
      discarded: ['slitheringSnake', 'sicklyBerries2'],
      revealed: ['juicyBats', 'disruptingTheFeast'],
      selected: 2
    },
    stack: [{type: 'EncounterClear'}]
  });

  const result = tick(start);

  const expected = testState({
    encounters: {
      discarded: ['slitheringSnake', 'sicklyBerries2', 'juicyBats', 'disruptingTheFeast'],
      revealed: [],
      selected: null
    },
    stack: []
  });
  
  t.deepEqual(result, expected, 'revealed and selected are cleared');

  t.end();
});
