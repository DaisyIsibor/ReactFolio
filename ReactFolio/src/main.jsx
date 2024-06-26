import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import 'bootstrap/dist/css/bootstrap.min.css'


import Error from './pages/Error';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Header from './pages/Header';
import Project from './pages/Portfolio';
import Footer from './pages/Footer';
import Resume from './pages/Resume'

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
      path: '/Footer',
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
