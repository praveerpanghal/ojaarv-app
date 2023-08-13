import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import your components for different pages
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    //  <Router basename="/ojaarv-app">   
       <Router>   
     
        <nav>
          <ul>
            <li>
              <Link to="/ojaarv-app/">Home</Link>
            </li>
            <li>
              <Link to="/ojaarv-app/services">Services</Link>
            </li>
            <li>
              <Link to="/ojaarv-app/contactus">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route path="/ojaarv-app/" element={<Home />} />
        <Route path="/ojaarv-app/services" element={<Services />} />
        <Route path="/ojaarv-app/contactus" element={<ContactUs />} />
      </Routes>
  
    </Router>
  );
}

export default App;
