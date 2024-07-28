import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Home from '../src/view/Home/home'
import Addmovies from './view/Addmovies/Addmovies';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
{
  path: '/add',
  element: <Addmovies />,
}
  ,
  {
    path: '*',
    element: <h1>404 Page Not Found</h1>,
  },
])
root.render(<div>
  <RouterProvider router={router} />
 
  </div>);

