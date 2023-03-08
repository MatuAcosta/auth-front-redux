import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../features/register/registerSlice';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Container, FormButton, FormContainer, FormInput } from './styles/Style';
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
    <Container>
    <h1>Register</h1>
      <FormContainer>
        <FormInput>  
        <input name='name' placeholder='name' type='text' onChange={e=> setName(e.target.value)}></input>
        </FormInput>
        <FormInput>
        <input placeholder='email' name="email" type="text" onChange={e => setEmail(e.target.value)}></input>
        </FormInput>
        <FormInput>
        <input placeholder='password' onChange={e => setPassword(e.target.value)} name="password" type="text"></input>
        </FormInput>
        <FormInput>
        <FormButton onClick={register}>
          Registrarse
        </FormButton>
        </FormInput>
      </FormContainer>
    </Container>
  )
}

export default Register