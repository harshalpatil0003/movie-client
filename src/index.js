import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Home from '../src/view/Home/home'
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <h1>404 Page Not Found</h1>,
  },
])
root.render(<div>
  <RouterProvider router={router} />
 
  </div>);

