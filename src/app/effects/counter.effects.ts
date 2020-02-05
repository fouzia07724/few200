import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap, map, filter } from 'rxjs/operators';
import * as counterActions from '../actions/counter.actions';
import { applicationStarted } from '../actions/app.actions';
import { Store } from '@ngrx/store';
import { AppState, selectCurrentCount } from '../reducers';
import { dispatch } from 'rxjs/internal/observable/pairs';

@Injectable()
export class CounterEffects {


  // when application is tarted.
  // check the local storage for 'by'
  // if it is there , dispatch at setCountby
  // if it isn't , dont do anything

  readCountFromLocalStorage$ = createEffect(() =>

    this.actions$.pipe(
      ofType(applicationStarted),
      map(() => localStorage.getItem('by')), // -> '5' | null
      filter(by => by !== null), // we got nothing
      map(by => parseInt(by, 10)), // '5' -> 5
      map(by => counterActions.countBySet({ by })) // action! Actions get dispatched back into the store
    ), { dispatch: true }


  );

  readCurrentFromLocalStorage$ = createEffect(() =>

    this.actions$.pipe(
      ofType(applicationStarted),
      map(() => localStorage.getItem('current')), // -> '5' | null
      filter(current => current !== null), // we got nothing
      map(current => +current), // convert to an int
      map(current => counterActions.currentSet({ current })) // action! Actions get dispatched back into the store
    ), { dispatch: false }


  );

  writeCurrentToLocalStorage$ = createEffect(() =>

    this.actions$.pipe(
      ofType(counterActions.countDecremented, counterActions.countIncremented, counterActions.countReset),
      tap(() => localStorage.setItem('current', this.current.toString()))
    ), { dispatch: false }

  );



  wrtiteCounttoLocalStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(counterActions.countBySet),
      tap(a => localStorage.setItem('by', a.by.toString()))

    ), { dispatch: false }
  );




  logActions$ = createEffect(() =>
    this.actions$.pipe(
      tap(a => console.log(`Got an action of type ${a.type}`))
    ), { dispatch: false }
  );
  current: number;
  constructor(private actions$: Actions, private store: Store<AppState>) {

    store.select(selectCurrentCount).subscribe(c => this.current = c);

  }
}

