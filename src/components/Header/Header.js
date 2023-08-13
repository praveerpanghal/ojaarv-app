import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Services from '../Services/Services';
import ContactUs from '../ContactUs/ContactUs';

function Header() {
  return (
    <header>
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </header>
  );
}

export default Header;
