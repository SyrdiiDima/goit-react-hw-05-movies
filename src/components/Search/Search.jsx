import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Search.module.css'
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
    className={css.input}
        type="text"
        name="search"
        value={search}
        autoComplete="off"
       
        onChange={onInputChange}
          />
          <button type="submit" className={css.button}> 
        Search
      </button>

      
    </form>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};