import React from 'react';
import './auth.css';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import {  faUser, faLock, faPlus } from '@fortawesome/free-solid-svg-icons';

const Register = ({
  username,
  password,
  setUsername,
  setPassword}) => {
  return (
    <div className='register-div'>
      <h1>Create a new account</h1>    
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
      <div className='register-button-container'>
        <Button
          className="register-button"
          label=" Sign Up"
          icon={faPlus}
        />
      </div>
    </div>
  );
}

export default Register;