import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { login } from '../features/login/loginSlice';
import { Link, redirect,Outlet, Navigate } from 'react-router-dom';
const Login = () => {
  
  const [email, setEmail] = useState('');
  
  const [password,setPassword] = useState('');
  
  const dispatch = useDispatch();
  
  const {token,fail,logged} = useSelector(state => state.login);

  const loginUser = e => {
      e.preventDefault();
      dispatch(login({email,password}))
  }
  if (logged){
    return (
      <Navigate to={'/home'}/>  
    )
  }
  return (
    <>
      <h1>Login</h1>
      <form>
        <label htmlFor="email"> EMAIL</label>
        <input name="email" type="text" onChange={e => setEmail(e.target.value)}></input>
        <br></br><br></br>
        <label htmlFor="password"> password</label>
        <input onChange={e => setPassword(e.target.value)} name="password" type="text"></input>
        <br></br>
        <br></br>
        <button onClick={loginUser}>ENVIAR</button>
        <button><Link to={'/register'}> Registrarse</Link></button>
      </form>
  </>
  
  )
}

export default Login