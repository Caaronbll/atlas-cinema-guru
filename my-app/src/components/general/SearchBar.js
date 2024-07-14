import React from 'react';
import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({
  title,
  setTitle
}) => {
  const handleInput = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="general-search">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input
        type="text"
        placeholder="        Search Movies"
        value={title}
        onChange={handleInput}
      />
    </div>
  );
}

export default SearchBar;