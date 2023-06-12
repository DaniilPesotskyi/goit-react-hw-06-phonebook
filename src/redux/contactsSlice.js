import { createSlice, nanoid } from '@reduxjs/toolkit';
import initialState from './initialState';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    createContact: (state, { payload }) => {
      state.contacts.push({
        id: nanoid(),
        name: payload.name,
        number: payload.number,
      });
    },
    deleteContact: (state, { payload }) => {
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== payload),
      };
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { createContact, deleteContact } = contactsSlice.actions;
