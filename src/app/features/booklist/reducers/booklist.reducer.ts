import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as listActions from '../actions/list.actions';




// tslint:disable-next-line: no-empty-interface
export interface BooklistItemEntity {
  id: string;
  description: string;
}

export interface ListState extends EntityState<BooklistItemEntity> {

}

export const adapter = createEntityAdapter<BooklistItemEntity>();

const initialState: ListState = {
  ids: ['1', '2'],
  entities: {
    1: { id: '1', description: 'Book A' },
    2: { id: '2', description: 'Book B' }
  }
};

const reducerFunction = createReducer(
  initialState,
  on(listActions.bookItemAdded, (s, a) => adapter.addOne(a.payload, s))
);

export function reducer(state: ListState = initialState, action: Action) {
  return reducerFunction(state, action);
}




