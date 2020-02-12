import { Component, OnInit, ViewChild } from '@angular/core';
import { BooklistState } from '../../reducers';
import { Store } from '@ngrx/store';
import { bookItemAdded } from '../../actions/list.actions';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {


  constructor(private store: Store<BooklistState>) { }

  ngOnInit() {
  }


  // tslint:disable-next-line: align
  addItem(descriptionEl: HTMLInputElement, descriptionEl1: HTMLInputElement) {
    const description = descriptionEl.value;
    const author = descriptionEl1.value;
    this.store.dispatch(bookItemAdded({ description, author }));
    // todo Dispatch an action
    descriptionEl.value = '';
    descriptionEl.focus();
  }

}
