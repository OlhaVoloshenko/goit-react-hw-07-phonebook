import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from 'Redux/contactsApi';
import { filter } from 'Redux/contact-reduser';

export const store = configureStore({
  reducer: { [contactsApi.reducerPath]: contactsApi.reducer, filter },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
