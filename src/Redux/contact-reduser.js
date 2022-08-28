import { createReducer } from '@reduxjs/toolkit';
import { filterContacts } from 'Redux/contacts-action';

export const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});
