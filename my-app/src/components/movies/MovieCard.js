import React, { useState, useEffect } from 'react';
import './movies.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClock } from '@fortawesome/free-solid-svg-icons';

const MovieCard = ({ movie }) => {
    const[isFavorite, setIsFavorite] = useState(false);
    const [isWatchLater, setIsWatchLater] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [favRes, wlRes] = await Promise.all([
                    axios.get('/api/titles/favorite/'),
                    axios.get('/api/titles/watchlater/'),
                ]);

                const favorites = favRes.data;
                const watchLater = wlRes.data;

                setIsFavorite(favorites.some(favMovie => favMovie.imbId === movie.imbId));
                setIsWatchLater(watchLater.some(wlMovie => wlMovie.imbId === movie.imbId));
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, [movie.imbId]);

    const handleClick = async (type) => {
        try {
            const url = `/api/titles/${type}/${movie.imbId}`;
            if (type === 'favorite') {
                if (isFavorite) {
                    await axios.delete(url);
                    setIsFavorite(false);
                } else {
                    await axios.post(url);
                    setIsFavorite(true);
                }
            } else if (type === 'watchlater') {
                if (isWatchLater) {
                    await axios.delete(url);
                    setIsWatchLater(false);
                } else {
                    await axios.post(url);
                    setIsWatchLater(true);
                }
            }
        } catch (error) {
            console.error(`Error updating ${type} status`, error);
        }
    };

    return (
        <li className='movie-card'>
            <div className='movie-header'>
                <h2>{movie.title}</h2>
                <div className='movie-actions'>
                    <FontAwesomeIcon
                        icon={faHeart}
                        onClick={() => handleClick('favorite')}
                        className={isFavorite ? 'favorite' : ''}
                    />
                    <FontAwesomeIcon
                        icon={faClock}
                        onClick={() => handleClick('watchlater')}
                        className={isWatchLater ? 'watch-later' : ''}
                    />
                </div>
            </div>
            <p>{movie.synopsis}</p>
            <div className='movie-genres'>
                {movie.genres.map((genre, index) => (
                    <span key={index} className='genre-tag'>{genre}</span>
                ))}
            </div>
        </li>
    );
}


export default MovieCard;