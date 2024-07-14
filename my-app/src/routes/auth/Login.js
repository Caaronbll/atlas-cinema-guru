import React from 'react';
import './auth.css';
import { faUser, faLock, faKey } from '@fortawesome/free-solid-svg-icons';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';


const Login = ({
  username,
  password,
  setUsername,
  setPassword}) => {
  return (
    <div className='login-div'>
      <h1>Sign into your account</h1>    
      <Input
      label="Username"
      type="text"
      className="input"
      value={username}
      setValue={setUsername}
      icon={faUser}
      />
      <Input
        label="Password"
        type="password"
        className="input"
        value={password}
        setValue={setPassword}
        icon={faLock}
      />
      <div className='login-button-container'>
        <Button 
          className="login-button"
          label=" Sign In"
          icon={faKey}
        />
      </div>
    </div>
  );
}

export default Login;