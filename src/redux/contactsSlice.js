import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from './contactsOperations';

// export const getContacts = createAsyncThunk(
//   'contacts/getContacts',
//   async () => {
//     const contacts = await fetchContacts();
//     return contacts;
//   }
// );

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    entities: [],
    filter: '',
    status: null,
    error: null,
  },
  reducers: {
    // addContact(state, action) {
    //   state.items.push(action.payload);
    // },
    // deleteContact(state, action) {
    //   state.items = state.items.filter(item => item.id !== action.payload);
    // },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [getContacts.pending]: state => {
      state.status = 'loading';
      state.error = null;
    },
    [getContacts.fulfilled]: (state, { payload }) => {
      state.status = 'resolved';
      state.entities = payload;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.status = null;
      state.entities.push(payload);
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.status = null;
      state.entities = state.entities.filter(item => item.id !== payload.id);
    },
    [getContacts.rejected]: (state, { payload }) => {
      state.status = 'rejected';
      state.error = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { setFilter } = contactsSlice.actions;
