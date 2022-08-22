import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'Redux/contactCreateSlice';

export const Filter = () => {
  const contactFilter = useSelector(store => store.contacts.filter);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        value={contactFilter}
        onChange={evt => dispatch(changeFilter(evt.currentTarget.value))}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  filterChange: PropTypes.func,
};
