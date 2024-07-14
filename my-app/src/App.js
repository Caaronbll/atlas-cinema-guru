import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Authentication from './routes/auth/Authentication';
import Dashboard from './routes/dashboard/Dashboard';



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      axios.post('http://localhost:8000/api/auth/', {}, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.username) {
          setIsLoggedIn(true);
          setUserUsername(data.userUsername)
        }
      })
      .catch(error => {
        console.log('Error:', error);
      });
    }
  }, []);

  return (
      <div className={`App ${isLoggedIn ? 'dashboard-view' : 'authentication-view'}`}>
        {isLoggedIn ? <Dashboard
          userUsername={userUsername}
          setIsLoggedIn={setIsLoggedIn}
        /> : <Authentication
          setIsLoggedIn={setIsLoggedIn}
          setUserUsername={setUserUsername}
        />}
      </div>
  );
}

export default App;
