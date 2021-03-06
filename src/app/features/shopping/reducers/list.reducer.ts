import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as listActions from '../actions/list.actions';


// tslint:disable-next-line: no-empty-interface
export interface ShoppingItemEntity {
  id: string;
  description: string;
  purchased: boolean;
}

export interface ListState extends EntityState<ShoppingItemEntity> {

}

export const adapter = createEntityAdapter<ShoppingItemEntity>();

// below is only when we want to hook it up with API otherwise
const initialState = adapter.getInitialState();

// uncomment the below lines if not using APi


// const initialState: ListState = {
//  ids: ['1', '2'],
// entities: {
//   1: { id: '1', description: 'Shampoo', purchased: false },
//   2: { id: '2', description: 'Bread', purchased: true }
// }
// };

const reducerFunction = createReducer(
  initialState,
  on(listActions.shoppingItemAdded, (s, a) => adapter.addOne(a.payload, s)),
  on(listActions.shoppingItemPurchased, (s, a) => adapter.updateOne({ id: a.payload.id, changes: { purchased: true } }, s)),
  on(listActions.shoppingListLoaded, (s, a) => adapter.addAll(a.payload, s)), // for effects
  on(listActions.shoppingItemAddedSuccessfully, (s, a) => {
    const tempState = adapter.removeOne(a.oldId, s);
    return adapter.addOne(a.payload, tempState);
  }) // this is for POST through API

);

export function reducer(state: ListState = initialState, action: Action) {
  return reducerFunction(state, action);
}



