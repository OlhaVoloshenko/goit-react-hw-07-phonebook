import PropTypes from 'prop-types';
//import { useDispatch, useSelector } from 'react-redux';
//import { changeFilter } from 'Redux/contactCreateSlice';

export const Filter = ({ Filter, setFilter }) => {
  //const contactFilter = useSelector(store => store.contacts.filter);
  //const dispatch = useDispatch();
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        value={Filter}
        onChange={evt => setFilter(evt.currentTarget.value)}
      />
    </div>
  );
};

Filter.propTypes = {
  Filter: PropTypes.string,
  setFilter: PropTypes.func,
};
