import { useEffect, useState } from 'react';
import './styles/global.css';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';

const basename = '/devjian-portfolio/'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route path='/' element={<HomePage />} />
    </Route>
  ), {basename})

function App() {
  
  return <RouterProvider router={router} />;
}

export default App
