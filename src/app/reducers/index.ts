import * as fromCounter from './counter.reducer';



export interface AppState {
  counter: fromCounter.CounterState;



}

export const reducers = {
  counter: fromCounter.reducer
};

export const selectCurrentCountBy = (state: AppState) => state.counter.by;
export const selectCurrentcount = (state: AppState) => state.counter.current;

export const selectCountAtStart = (state: AppState) => state.counter.current === 0;
