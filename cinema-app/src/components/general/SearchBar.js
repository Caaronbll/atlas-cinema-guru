import React from 'react';
import './general.css';

const SearchBar = ({
    title,
    setTitle,
    className
}) => {
    const handleInput = (event) => {
        setTitle(event.targer.value);
    };

    return (
        <div className={`search-bar-container ${className}`}>
            <input
            type='text'
            value={title}
            onChange={handleInput}
            placeholder='Search Movies'
            className='search-input'
            />
        </div>
    );
}

export default SearchBar;