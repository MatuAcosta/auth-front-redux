import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../features/register/registerSlice';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
const Register = () => {
    const [email, setEmail] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const {registered} = useSelector(state => state.register);
    const dispatch = useDispatch();
    const register = e => {
        e.preventDefault();
        dispatch(createUser({name,email,password}));
    }

    if(registered) {
      return (
        <Navigate to={'/login'} replace={true}/>
      )
    }

  return (
    <>
    <h1>Register</h1>
      <form>
        <label htmlFor='name'>Name</label>
        <input name='name' type='text' onChange={e=> setName(e.target.value)}></input>
        <br></br><br></br>
        <label htmlFor="email"> EMAIL</label>
        <input name="email" type="text" onChange={e => setEmail(e.target.value)}></input>
        <br></br><br></br>
        <label htmlFor="password"> password</label>
        <input onChange={e => setPassword(e.target.value)} name="password" type="text"></input>
        <br></br>
        <br></br>
        <button onClick={register}>ENVIAR</button>
      </form>
    </>
  )
}

export default Register