import React from 'react';
import './movies.css';
import SearchBar from '../general/SearchBar.js';
import Tag from './Tag';
import SelectInput from '../general/SelectInput.js';
import Input from '../general/Input.js'

const Filter = ({
  minYear, setMinYear,
  maxYear, setMaxYear,
  sort, setSort,
  genres, setGenres,
  title, setTitle }) => {

  const tags = [
    'Action', 'Drama',
    'Comedy', 'Biography',
    'Romance', 'Thriller',
    'War', 'History', 'Sport',
    'Sci-fi', 'Documentary',
    'Crime', 'Fantasy'
  ];

  return (
    <div className="filter-container">
      <div className='left-side'>
      <SearchBar title={title} setTitle={setTitle} />
      <div className='year-inputs'>
        <Input
          type='number'
          value={minYear}
          onChange={(e) => setMinYear(e.target.value)}
          placeholder='Min Year'
        />
        <Input
          type='number'
          value={maxYear}
          onChange={(e) => setMaxYear(e.target.value)}
          placeholder='Max Year'
        />
        <SelectInput label='Sort' value={sort} setValue={setSort}
        options={([
          { value: 'latest', label: 'Latest' },
          { value: 'oldest', label: 'Oldest' },
          { value: 'highstrated', label: 'Highst Rated' },
          { value: 'lowestrated', label: 'Lowest Rated' },
        ])} />
        </div>
      </div>
      <div className='filter-tags'>
      <ul>
        {tags.map(tag => (
          <Tag
            key={tag}
            genre={tag}
            filter
            genres={genres}
            setGenres={setGenres}
          />
        ))}
      </ul>
    </div>
    </div>
    
  );
}

export default Filter;