import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/index';
import { ContactListBox, TitleContactsList } from './ContactList.styled';

export function ContactList({ contacts }) {
  return (
    <>
      <TitleContactsList>Contact List</TitleContactsList>
      {contacts.length ? (
        <ContactListBox>
          {contacts.map((contact, item) => (
            <ContactItem key={contact.id} contact={contact} item={item} />
          ))}
        </ContactListBox>
      ) : (
        <p>No any contacts</p>
      )}
    </>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
