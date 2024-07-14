import React, { useState } from 'react';
import './auth.css';
import axios from 'axios';
import Button from '../../components/general/Button';
import Login from './Login';
import Register from './Register';


const Authentication = ({
  setIsLoggedIn,
  setUserUsername
}) => {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = _switch ? '/api/auth/login' : '/api/auth/register';
    
    try {
      const response = await axios.post(url, { username, password });
      const { token } = response.data;
      localStorage.setItem('accessToken', token);
      setUserUsername(username);
      setIsLoggedIn(true);
    } catch (error) {
      console.log('authentication error:', error);
    }
  };

  return (
    <div className="auth-auth">
        <div className="auth-top-buttons">
          <Button
            label="Sign In" 
            onClick={() => setSwitch(true)}
            className={_switch ? 'active' : ''}
          />
          <Button 
            label="Sign Up" 
            onClick={() => setSwitch(false)}
            className={!_switch ? 'active' : ''}
          />
        </div>
       <form onSubmit={handleSubmit}> 
        {_switch ? (
          <Login 
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        ) : (
          <Register 
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        )}
      </form>
    </div>
  );
}

export default Authentication;