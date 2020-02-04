import { createSelector } from '@ngrx/store';

import * as fromCounter from './counter.reducer';

export interface AppState {
  counter: fromCounter.CounterState;
}

export const reducers = {
  counter: fromCounter.reducer
};




// 1. If you are in a feature module, create a feature selector

// 2. Create a selector for each "branch" of the state.
const selectCounterBranch = (state: AppState) => state.counter;

// 3. Any helpers?

// 4. What you need for the components

export const selectCurrentCount = createSelector(selectCounterBranch, b => b.current);
export const selectCountingBy = createSelector(selectCounterBranch, b => b.by);

export const selectCountAtStart = createSelector(
  selectCurrentCount, // --> count
  selectCountingBy,   // --> by
  (count, by) => count - by < 0
);

// export const selectCurrentCountBy = (state: AppState) => state.counter.by;
// export const selectCurrentcount = (state: AppState) => state.counter.current;

// export const selectCountAtStart = (state: AppState) => state.counter.current === 0;
