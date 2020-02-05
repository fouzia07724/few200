import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Store } from '@ngrx/store';
import { ShoppingState } from '../../reducers';
import { shoppingItemAdded } from '../../actions/list.actions';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<ShoppingState>) { }

  ngOnInit() {
  }

  // tslint:disable-next-line: align
  addItem(descriptionEl: HTMLInputElement) {
    const description = descriptionEl.value;
    this.store.dispatch(shoppingItemAdded({ description }));
    // todo Dispatch an action
    descriptionEl.value = '';
    descriptionEl.focus();
  }


}



