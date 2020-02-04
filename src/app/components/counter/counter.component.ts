import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, selectCurrentCount, selectCountAtStart, selectCountingBy } from 'src/app/reducers';

import * as actions from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  current$: Observable<number>;
  atStart$: Observable<boolean>;
  countBy$: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.current$ = this.store.select(selectCurrentCount);
    this.atStart$ = this.store.select(selectCountAtStart);
    this.countBy$ = this.store.select(selectCountingBy);

  }

  increment() {
    //   this.current += 1;
    this.store.dispatch(actions.countIncremented());
  }

  decrement() {
    //    this.current -= 1;
    this.store.dispatch(actions.countDecremented());
  }

  reset() {
    //    this.current -= 1;
    this.store.dispatch(actions.countReset());
  }

  setCountBy(by: number) {
    this.store.dispatch(actions.countBySet({ by }));
  }





}
