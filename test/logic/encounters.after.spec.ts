import * as test from "tape";
import {testState} from '../helpers';

import {GameState, Event} from '../../types';
import {tick} from '../../src/logic';

test('after encounter hook works as expected', t => {

  const start = testState({
    stack: [{type: 'EncounterAfter'},{type: '_TestEvent'}]
  });

  const result = tick(start);

  const expected = testState({
    stack: [{type: 'EncounterClear'},{type: '_TestEvent'}]
  });
  
  t.deepEqual(result, expected, 'an EncounterClear event was queued');

  t.end();
});
