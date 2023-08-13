import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Include the Header component */}
      </div>
    </Router>
  );
}

export default App;
