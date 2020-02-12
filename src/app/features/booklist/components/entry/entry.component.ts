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
  addItem(bookTitle: HTMLInputElement, bookAuthor: HTMLInputElement, bookCover: HTMLSelectElement) {
    const description = bookTitle.value;
    const author = bookAuthor.value;
    const index = bookCover.selectedIndex;
    const cover = bookCover.options[index].text;

    this.store.dispatch(bookItemAdded({ description, author, cover }));
    // todo Dispatch an action
    bookTitle.value = '';
    bookAuthor.value = '';
    bookTitle.focus();
  }

}
