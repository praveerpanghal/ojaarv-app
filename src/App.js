import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

// Import your components for different pages
import Home from './components/Home';
import Services from './components/Services';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router basename="/ojaarv-app"> 
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
