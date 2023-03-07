import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store';
import { Provider } from 'react-redux';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import { loadLogin } from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path:'login',
    element: <Login/>
  },
  {
    path: 'register',
    element: <Register/>
  },
  {
    path: 'home',
    element: <Home/>
  }
  


])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
