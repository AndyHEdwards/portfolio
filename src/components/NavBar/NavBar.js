import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='NavBar'>
      <div className='logo'>Andy Edwards</div>
      <div className='links'>
        <div className='link'>Home</div>
        <div className='link'>Services</div>
        <div className='link'>Work</div>
        <div className='link'>Contact</div>
      </div>
    </div>
  );
}

export default NavBar;
