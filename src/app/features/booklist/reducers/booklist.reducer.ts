import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';




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
    1: { id: '1', description: 'Shampoo' },
    2: { id: '2', description: 'Bread' }
  }
};

const reducerFunction = createReducer(
  initialState
);

export function reducer(state: ListState = initialState, action: Action) {
  return reducerFunction(state, action);
}




