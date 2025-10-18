import { createBrowserRouter, Navigate } from 'react-router';
import NewsLayout from '../layouts/NewsLayout/NewsLayout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Career from '../pages/Career/Career';
import NewsDetailsLayout from '../layouts/NewsDetailsLayout/NewsDetailsLayout';
import AuthLayout from '../layouts/AuthLayout/AuthLayout';
import Login from '../pages/Auth/Login/Login';
import Register from '../pages/Auth/Register/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: NewsLayout,
    children: [
      { index: true, Component: () => <Navigate to="home" replace /> },
      { path: 'home', Component: Home },
      { path: 'about', Component: About },
      { path: 'career', Component: Career },
    ],
  },
  {
    path: 'news-details',
    Component: NewsDetailsLayout,
  },
  {
    path: 'auth',
    Component: AuthLayout,
    children: [
      { index: true, Component: () => <Navigate to="login" replace /> },
      { path: 'login', Component: Login },
      { path: 'register', Component: Register },
    ],
  },
]);
