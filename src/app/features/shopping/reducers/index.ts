export const featureName = 'shoppingFeature';
import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShoppingItemModel } from '../model';

// tslint:disable-next-line: no-empty-interface
export interface ShoppingState {
  list: fromList.ListState;
}

export const reducers = {
  list: fromList.reducer
};

// selectors

// 1. Create a Feature
const selectFeature = createFeatureSelector<ShoppingState>(featureName);
// 2. One per branch
const selectListBranch = createSelector(selectFeature, f => f.list);
// 3.Helpers
const { selectAll: selectAllListItem } = fromList.adapter.getSelectors(selectListBranch);

// 4.What the component needs


// TODO ShoppingItemModel[]
export const selectShoppingItemModel = createSelector(selectAllListItem,
  // (items) => items as ShoppingItemModel[] // original one is this
  (items) => items.map(item => ({ ...item, isTemporary: item.id.toString().startsWith('T') } as ShoppingItemModel))  // this one added only if doing POST from APi
);
