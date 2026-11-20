import type { CountAction, CountState } from '../../domain/animation';

export const initialCountState: CountState = { phase: 'idle' };

export function countReducer(state: CountState, action: CountAction): CountState {
  switch (action.type) {
    case 'visible':
      return state.phase === 'idle' ? { phase: 'running' } : state;
    case 'completed':
      return state.phase === 'completed' ? state : { phase: 'completed' };
  }
}
