import React from 'react';
import './components.css';

function Activity({
  userUsername,
  title,
  date
}) {

  return (
    <li className="activity-item">
      <p>
        <span className="color-red">{userUsername} </span>added
        <span className="color-red"> {title} </span>to watch later -
        <span className="font-italics"> {date}</span>
      </p>
    </li>
  );
}

export default Activity;