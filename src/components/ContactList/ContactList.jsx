import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem';
import { useContacts } from 'hooks/useContacts';
import { toast } from 'react-toastify';

import { useEffect } from 'react';
import { getContacts } from 'redux/contactsOperations';

export function ContactList() {
  const { dispatch, contacts, filter, deleteContact } = useContacts();

  const filteredContacts = contacts
    .filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  function handleDeleteContact(id, name) {
    deleteContact(id);
    toast.info(`${name.toUpperCase()} has been removed from contacts.`);
  }

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <ul>
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactListItem
          key={id}
          name={name}
          number={phone}
          onDeleteContact={() => handleDeleteContact(id, name)}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
