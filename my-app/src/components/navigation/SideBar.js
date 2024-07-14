import React, { useState, useEffect, useCallback } from 'react';
import './navigation.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Activity from '../Activity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar, faClock, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
  const [selected, setSelected] = useState("home");
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);
  const navigate = useNavigate();

  const setPage = (pageName) => {
    setSelected(pageName);
    navigate(`/${pageName}`);
  }

  useEffect(() => {
    axios.get('/api/activity')
    .then(response => {
      setActivities(response.data);
    })
    .catch((error) => {
      console.error('Error fetching response:', error)
    });
  }, []);

  const toggleSideBar = () => {
    setSmall(!small);
  };

  return (
    <nav
      className={`nav-sidebar ${small ? 'small' : 'open'}`}
      onMouseEnter={toggleSideBar}
      onMouseLeave={toggleSideBar}
    >
      <ul className="nav-menu">
        <li
          className={`nav-item ${selected === 'home' ? 'selected' : ''}`}
          onClick={() => setPage('home')}
        >
          <FontAwesomeIcon className="fa-icon" icon={faHome} />
          {!small && <span>Home</span>}
          <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
        </li>
        <li
          className={`nav-item ${selected === 'favorites' ? 'selected' : ''}`}
          onClick={() => setPage('favorites')}
        >
          <FontAwesomeIcon className="fa-icon" icon={faStar} />
          {!small && <span>Favorites</span>}
          <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
        </li>
        <li
          className={`nav-item ${selected === 'watchlater' ? 'selected' : ''}`}
          onClick={() => setPage('watchlater')}
        >
          <FontAwesomeIcon className="fa-icon" icon={faClock} />
          {!small && <span>Watch Later</span>}
          <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
        </li>
      </ul>
      <div className="activities-container">
        <h3 className="activities-title">Latest Activities</h3>
          <ul className="activity-list">
            {activities.slice(0, 10).map(activity => (
              <Activity key={Activity.id} activity={activity} />
            ))}
          </ul>
      </div>
    </nav>
  );
}

export default SideBar;