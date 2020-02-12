import { createAction, props } from '@ngrx/store';
import { BooklistItemEntity } from '../reducers/booklist.reducer';

let currentId = 99;

export const bookItemAdded = createAction(
  '[book list] add item',
  ({ description, author, cover }: { description: string, author: string, cover: string }) => ({
    payload: {
      description,
      author,
      cover,
      id: 'T' + currentId++
    }
  })
);

export const bookListLoaded = createAction(
  '[shopping list] shopping list loaded',
  props<{ payload: BooklistItemEntity[] }>()
);

