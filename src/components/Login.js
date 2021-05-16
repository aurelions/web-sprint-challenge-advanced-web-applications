import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  

  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: ''
  });

  const [error, setError] = useState('')

  const {push} = useHistory()

  const handleChanges = e => {
    setLoginInfo({...loginInfo, [e.target.name]: e.target.value})
  }

  const submitHandler = e => {
   
    e.preventDefault();
        axios.post('http://localhost:5000/api/login', loginInfo)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            push('/protected');
        })
        .catch(err => {
            console.log(err)
        })
        
    if (loginInfo.username === "" || loginInfo.password === '' ) {
      setError('Username and Password field is required.')
        
    }else if (loginInfo.username !== "Lambda" || loginInfo.password !== 'i<3Lambd4' ) {
      setError('Incorrect Login.')
    }
  };
  
  return (
    <div>
      <h1>BUBBLE</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Please Login!</h2>
      </div>
      <form onSubmit={submitHandler}>
                <input data-testid="username" name="username" type="text" value={loginInfo.username} placeholder="Username" onChange={handleChanges}/> 
                <input data-testid="password" name="password" type="password" value={loginInfo.password} placeholder="Password" onChange={handleChanges}/> 
                <button>Login</button>
      </form>
      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;