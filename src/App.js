import { useSelector } from 'react-redux';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import { Navigate, Outlet,redirect } from 'react-router-dom';

function App() {
  return (
    <>
      <Navigate to='/login' replace={true}/>
    </>
  );
}

export default App;
