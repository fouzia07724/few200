import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ShoppingItemModel } from '../../model';
import { ShoppingItemEntity } from '../../reducers/list.reducer';
import { ShoppingState } from '../../reducers';
import { Store } from '@ngrx/store';
import { shoppingItemPurchased } from '../../actions/list.actions';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  // model: ShoppingItemModel[] = [
  //   { id: '1', description: 'Bear' },
  //   { id: '2', description: 'More Bear' }
  // ];

  @Input() model: ShoppingItemModel[];
  constructor(private store: Store<ShoppingState>) { }

  ngOnInit() {
  }

  markPurchased(item: ShoppingItemEntity) {
    this.store.dispatch(shoppingItemPurchased({ payload: item }));
  }




}
