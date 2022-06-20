
import React from 'react';
import './header.scss';

export default function Header() {
  return (
    <section className='header'>
      <header>
        <h1>WebPulse</h1>
      </header>
      <nav className='navBar' >
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/history'>History</a></li>
          <li><a href='#'>WorkSpace</a></li>
          <li><a href='#'>Register</a></li>
        </ul>
      </nav>
    </section>
  );
}