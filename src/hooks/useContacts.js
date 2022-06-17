import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from 'redux/contactsOperations';
import { setFilter } from '../redux/contactsSlice';

export function useContacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.entities);
  const filter = useSelector(state => state.contacts.filter);

  const handleAddContact = newContact => dispatch(addContact(newContact));
  const handleDeleteContact = id => dispatch(deleteContact(id));
  const handleSetFilter = value => dispatch(setFilter(value));

  return {
    dispatch,
    contacts,
    filter,
    addContact: handleAddContact,
    deleteContact: handleDeleteContact,
    setFilter: handleSetFilter,
  };
}
