import { Component, OnInit } from '@angular/core';
import { BooklistItemModel } from './model';
import { Observable } from 'rxjs';
import { BooklistState, selectBookItemModel } from './reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {


  list$: Observable<BooklistItemModel[]>;

  constructor(private store: Store<BooklistState>) { }



  ngOnInit() {
    this.list$ = this.store.select(selectBookItemModel);
  }

}
