export type CountPhase = 'idle' | 'running' | 'completed';
export type CountState = { phase: CountPhase };
export type CountAction = { type: 'visible' } | { type: 'completed' };
