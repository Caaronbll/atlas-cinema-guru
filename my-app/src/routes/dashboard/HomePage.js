import React, { useState, useEffect } from 'react';
import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import Filter from '../../components/movies/Filter';
import Button from '../../components/general/Button';
import axios from 'axios';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState("");
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);
  
  const loadMovies = async (pageNum) => {
    try {
      const response = await axios.get('/api/titles/advancedsearch', {
        params: {
          minYear,
          maxYear,
          genres: genres.join(','),
          title,
          sort,
          page: pageNum,
        }
      });
      if (pageNum === 1) {
        setMovies(response.data);
      } else {
        setMovies(prevMovies => [...prevMovies, ...response.data]);
      }
    }  catch (error) {
      console.error('Error loading Movies:', error);
    }
  };

  useEffect(() => {
    loadMovies(1);
  }, [minYear, maxYear, genres, sort, title]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadMovies(nextPage);
  };

  return (
    <div className="home-page">
      <Filter
        minYear={minYear}
        setMinYear={setMinYear}
        maxYear={maxYear}
        setMaxYear={setMaxYear}
        genres={genres}
        setGenres={setGenres}
        sort={sort}
        setSort={setSort}
        title={title}
        setTitle={setTitle}
      />
      <ul className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </ul>
      <Button label="Load More.." onClick={handleLoadMore} />
    </div>
  );
}

export default HomePage;