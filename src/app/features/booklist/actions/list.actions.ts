import { createAction, props } from '@ngrx/store';
import { BooklistItemEntity } from '../reducers/booklist.reducer';

let currentId = 99;

export const bookItemAdded = createAction(
  '[book list] add item',
  ({ description }: { description: string }) => ({
    payload: {
      description,
      id: 'T' + currentId++,
      purchased: false
    }
  })
);

export const bookListLoaded = createAction(
  '[shopping list] shopping list loaded',
  props<{ payload: BooklistItemEntity[] }>()
);

