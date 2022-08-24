import PropTypes from 'prop-types';
import {
  ListItem,
  TelNum,
  DelBtn,
  NumByOrder,
} from 'components/ContactList/ContactList.styled';
import { useDeleteContactMutation } from 'components/ContactsApi/contactsApi';

export function ContactItem({ contact, item }) {
  const [deleteContact] = useDeleteContactMutation();
  return (
    <ListItem>
      <NumByOrder>{item + 1}</NumByOrder>
      {contact.name}: <TelNum>{contact.phone}</TelNum>
      <DelBtn type="button" onClick={() => deleteContact(contact.id)}>
        Delete
      </DelBtn>
    </ListItem>
  );
}
ContactItem.propTypes = {
  contact: PropTypes.object,
  item: PropTypes.number,
};
