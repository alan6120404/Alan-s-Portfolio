import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

  return (
    <nav className='col-8 nav justify-content-around p-3'>
    <ul className='flex-row navbar-nav nav-fill w-100'>
      <li className="mx-4 nav-item">
        <Link to='/'>About</Link>
      </li>

      <li className="mx-4 nav-item">
        <Link to='/contact'>Contact</Link>
      </li>

      <li className="mx-4 nav-item">
        <Link to='/portfolio'>Portfolio</Link>
      </li>

      <li className="mx-4 nav-item">
        <Link to='/resume'>Resume</Link>
      </li>  
    </ul>
  </nav>
  );
}

export default Nav;