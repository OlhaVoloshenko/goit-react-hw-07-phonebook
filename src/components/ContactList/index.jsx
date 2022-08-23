import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/index';

export function ContactList({ contacts }) {
  return (
    <>
      <h2>Contact List</h2>
      {contacts.length ? (
        <ul>
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
