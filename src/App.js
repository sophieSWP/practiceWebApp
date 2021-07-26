import Logo from './Logo.png';
import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="main-navigation__logo">
            <h1>SmartWorkPlus</h1>
          </div>
          <React.Fragment>

          <Router>
          <nav className="main-navigation__items">
                <li>
                  <NavLink to="/frontend/src/Table">Table</NavLink>
                </li>
              
              </nav>
              </Router>
              </React.Fragment>


              
        <img src={Logo} className="App-logo" alt="logo" />
        <p>
         Creating smart environments
        </p>
        <a
          className="App-link"
          href="https://www.smartworkplus.com/"
         // href="http://localhost:3300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Data Visualization
        </a>
        
      </header>

      
    </div>


  );
}

export default App;
