import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isClicked, setClick] = useState(false);

  function handleClick() {
    setClick(!isClicked);
  }

  // Active link logic
  const getLinkClass = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link';

  return (
    <div className="nav_bar">
      <h2 className="logo">
        <i className="fas fa-globe"></i> JourneyGo
      </h2>

      <div className="menu-icns">
        <i
          className={isClicked ? 'fas fa-times' : 'fas fa-bars'}
          onClick={handleClick}
        ></i>
      </div>

      <nav className={`menuItems ${isClicked ? 'active' : ''}`}>
        <ul>
          <li>
            <NavLink to="/" className={getLinkClass}>
              <i className="fas fa-home"></i> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={getLinkClass}>
              <i className="fas fa-user"></i> About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={getLinkClass}>
              <i className="fas fa-cogs"></i> Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={getLinkClass}>
              <i className="fas fa-envelope"></i> Contact
            </NavLink>
          </li>
        </ul>
        <button><i className="fas fa-user-plus"></i> Sign Up</button>
      </nav>
    </div>
  );
}

export default Navbar;
