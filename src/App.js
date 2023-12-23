import HomePage from './HomePage';
import ResumePage from './ResumePage';
import ContactPage from './ContactPage';
import PortfolioPage from './PortfolioPage';
import ImageCard from './ImageCard';

import './ImageCard.css'; // Importing CSS for styling

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Your CSS file for styling
import logo from './logo.png';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';


// Define some basic page components


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <img className="logo" src={logo} alt="Logo" style={{ height: '60px', width: '60px'}} />
            <NavLink to="/my-react-app" activeClassName="active-link" exact>Home</NavLink> |{' '}
            <NavLink to="/portfolio" activeClassName="active-link">Portfolio</NavLink> |{' '}
            <NavLink to="/resume" activeClassName="active-link">Resume</NavLink> |{' '}
            <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
          </nav>
          <Routes>
            <Route path="/my-react-app" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
