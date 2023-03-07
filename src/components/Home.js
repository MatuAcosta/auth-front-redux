import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { useGetUsers, useGetUsersQuery } from '../features/api/apiSlice';

const Home = () => {
  const {logged,token} = useSelector(state => state.login);
  const {data ,error, isLoading} = useGetUsersQuery(token);
  if(!logged){
    return (
      <Navigate to={'/login'} replace={true}/>
    )
  }
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <ul>
      { 
        data.users.map(user => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
          </li>
        ))
      }
    </ul>
  )
}

export default Home