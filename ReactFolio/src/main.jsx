import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'


import Error from './pages/Error.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact';
import About from './pages/About';
import Header from './pages/Header.jsx';
import Project from './pages/Project.jsx';
import Footer from './pages/Footer.jsx';
import Resume from './pages/Resume.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Header',
        element: <Header />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
      path: '/Project',
      element: <Project />,
      },
      {
      path: '/Resume',
      element: <Resume />,
      },
      {
      path: '/Footerr',
      element: <Footer />,
     },
    ],
    },
   ]);
   




















ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
