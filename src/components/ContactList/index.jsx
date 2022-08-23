import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/index';
//import { useSelector } from 'react-redux';

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
export function ContactList({ contacts }) {
  return (
    <>
      <h2>Contact List</h2>
      {contacts.length ? (
        <ul style={{ margin: 0 }}>
          {contacts.map((contact, item) => (
            <ContactItem key={contact.id} contact={contact} item={item} />
          ))}
        </ul>
      ) : (
        <p>No any contacts</p>
      )}
    </>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
