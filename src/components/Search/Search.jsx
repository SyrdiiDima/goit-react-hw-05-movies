import { useState } from 'react';
import PropTypes from 'prop-types';

export const Search = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const onInputChange = event => {
    setSearch(event.currentTarget.value);
  };

  const onFormSubmin = e => {
    e.preventDefault();
    onSubmit(search);
  };

  return (
    <form onSubmit={onFormSubmin}>
      <input
        type="text"
        name="search"
        value={search}
        autoComplete="off"
       
        onChange={onInputChange}
          />
          <button type="submit">
        Search
      </button>

      
    </form>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};