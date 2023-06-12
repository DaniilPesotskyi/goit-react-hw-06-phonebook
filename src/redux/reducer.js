import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filtersSlice';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
