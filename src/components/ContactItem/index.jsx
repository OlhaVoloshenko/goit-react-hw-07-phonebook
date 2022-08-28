import PropTypes from 'prop-types';
import {
  ListItem,
  TelNum,
  DelBtn,
} from 'components/ContactList/ContactList.styled';
import { useDeleteContactMutation } from 'Redux/contactsApi';

export const ContactItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <ListItem>
      {name}: <TelNum>{number}</TelNum>
      <DelBtn
        type="button"
        disabled={isLoading}
        onClick={() => deleteContact(id)}
      >
        Delete
      </DelBtn>
    </ListItem>
  );
};
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
