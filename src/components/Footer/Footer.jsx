import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='web-logo-text'>
          <h2>JourneyGo</h2>
          <p>Find Your Dream Destination</p>
        </div>
        <div className='social-contancts'>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <div className='bottom'>
        <div className='footer-box Project'>
          <h5>Project</h5>
          <a href="">About Us</a>
          <a href="">Our Mission</a>
          <a href="">Case Studies</a>
          <a href="">Testimonials</a>
        </div>
        <div className='footer-box Community'>
          <h5>Community</h5>
          <a href="">Blog</a>
          <a href="">Forum</a>
          <a href="">Events</a>
          <a href="">Ambassadors</a>
        </div>
        <div className='footer-box Help'>
          <h5>Help</h5>
          <a href="">Support Center</a>
          <a href="">FAQs</a>
          <a href="">Contact Us</a>
          <a href="">Live Chat</a>
        </div>
        <div className='footer-box Others'>
          <h5>Others</h5>
          <a href="">Privacy Policy</a>
          <a href="">Terms & Conditions</a>
          <a href="">Careers</a>
          <a href="">Sitemap</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
