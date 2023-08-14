import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Services from '../Services/Services';
import ContactUs from '../ContactUs/ContactUs';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/"><i>OjaArv</i></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </header>
  );
}

export default Header;
