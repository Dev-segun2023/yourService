import React from 'react';
import { Link, useLocation} from 'react-router-dom';
import './Footer.css';

const Footer = () => {

  const location = useLocation();
  return (
    
      location.pathname === '/login' 
      ? null
      :
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            your<span>Service</span>
          </Link>

          <p>
            Bridging the gap between people who need services
            and trusted professionals who provide them.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/services">Services</Link>
          <Link to="/service-providers">Service Providers</Link>
          <Link to="/about">About Us</Link>
        </div>

        <div className="footer-links">
          <h3>For Users</h3>
          <Link to="/service-providers">Find a Service</Link>
          <Link to="/service-needers">Find Service Providers</Link>
          <Link to="/signup">Create Account</Link>
          <Link to="/login">Login</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@yourservice.com</p>
          <p>Lagos, Nigeria</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} yourService. All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
      
      </footer>
    
  );
};

export default Footer;