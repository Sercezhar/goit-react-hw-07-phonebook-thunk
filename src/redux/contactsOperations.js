import { createAsyncThunk } from '@reduxjs/toolkit';
// import { fetchContacts, deleteContactById } from 'services/contacts-api';
import * as contactsApi from 'services/contacts-api';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    const contacts = await contactsApi.fetchContacts();
    return contacts;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async values => {
    const contact = await contactsApi.addContact(values);
    return contact;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const contact = await contactsApi.deleteContact(id);
    return contact;
  }
);
