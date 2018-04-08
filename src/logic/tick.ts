import {GameState} from '../../types';

import {execute} from './execute';

export function tick(state: GameState): GameState {
  let nextEffect = state.stack[0];
  let newState = {
    ...state,
    stack: state.stack.slice(1)
  };
  return execute(newState, nextEffect);
}
