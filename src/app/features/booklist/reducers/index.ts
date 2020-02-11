export const featureName = 'booklistFeature';
import * as fromList from './booklist.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BooklistItemModel } from '../model';

// tslint:disable-next-line: no-empty-interface
export interface BooklistState {
  list: fromList.ListState;
}

export const reducers = {
  list: fromList.reducer
};
// selectors

// 1. Create a Feature
const selectFeature = createFeatureSelector<BooklistState>(featureName);
// 2. One per branch
const selectListBranch = createSelector(selectFeature, f => f.list);
// 3.Helpers
const { selectAll: selectAllListItem } = fromList.adapter.getSelectors(selectListBranch);

// 4.What the component needs


// TODO BookItemModel[]
export const selectBookItemModel = createSelector(selectAllListItem,
  (items) => items as BooklistItemModel[]
);
