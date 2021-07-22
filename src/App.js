import Logo from './Logo.png';
import React, { Component } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <p>
         SmartWorkPlus
        </p>
        <a
          className="App-link"
          href="https://www.smartworkplus.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Website
        </a>
      </header>
    </div>
  );
}

export default App;
