import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem';
import { useSelector } from 'react-redux';

/*export function ContactList({ contacts, onDelete }) {
  return (
    <>
      {contacts.map((contact, item) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          item={item}
          onDelete={onDelete}
        />
      ))}
    </>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};*/
export const ContactList = () => {
  const contacts = useSelector(store => store.contacts.items);
  const contactsFilter = useSelector(store => store.contacts.filter);

  const normalizedFilter = contactsFilter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};
