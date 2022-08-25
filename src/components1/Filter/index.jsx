import PropTypes from 'prop-types';

export const Filter = ({ Filter, setFilter }) => {
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
