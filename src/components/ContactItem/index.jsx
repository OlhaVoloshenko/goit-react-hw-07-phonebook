import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'Redux/contactCreateSlice';
import {
  ListItem,
  TelNum,
  DelBtn,
} from 'components/ContactList/ContactList.styled';

export function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();
  return (
    <ListItem>
      {name}: <TelNum>{number}</TelNum>
      <DelBtn type="button" onClick={() => dispatch(removeContact(id))}>
        Delete
      </DelBtn>
    </ListItem>
  );
}
ContactItem.propTypes = {
  contact: PropTypes.object,
  item: PropTypes.number,
};
