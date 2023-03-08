import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { login } from '../features/login/loginSlice';
import { Link, redirect,Outlet, Navigate } from 'react-router-dom';
import { Button } from './styles/Button';
import { FormContainer, StyledLink,Form, FormInput, FormButton } from './styles/Style';
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
    <FormContainer>
      <Form>
        <h1>Login</h1>
        <FormInput>
          <input placeholder='Email' name="email" type="text" onChange={e => setEmail(e.target.value)}></input>
        </FormInput>
        <FormInput>
          <input placeholder='Password' onChange={e => setPassword(e.target.value)} name="password" type="text"></input>
        </FormInput>
        <FormInput>
          <FormButton  variant='bold' onClick={loginUser}>Enviar</FormButton>
          <FormButton><StyledLink to={'/register'}> Registrarse</StyledLink></FormButton>
        </FormInput>
      </Form>
    </FormContainer>
  
  )
}

export default Login