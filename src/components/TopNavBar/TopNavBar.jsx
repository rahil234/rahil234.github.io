import "./TopNavBar.css";
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function TopNavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <nav className="top-nav-bar">
      <ul>
        <li className={location.pathname === '/' ? 'active' : ''}><button onClick={() => handleClick('/')}>Home</button></li>
        <li className={location.pathname === '/about' ? 'active' : ''}><button onClick={() => handleClick('/about')}>About</button></li>
        <li className={location.pathname === '/portfolio' ? 'active' : ''}><button onClick={() => handleClick('/portfolio')}>Portfolio</button></li>
        <li className={location.pathname === '/resume' ? 'active' : ''}><button onClick={() => handleClick('/resume')}>Resume</button></li>
        <li className={location.pathname === '/contact' ? 'active' : ''}><button onClick={() => handleClick('/contact')}>Contact</button></li>
      </ul>
    </nav>
  );
}

export default TopNavBar;
