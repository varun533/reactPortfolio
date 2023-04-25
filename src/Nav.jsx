import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(){
    return(
        <section className="header" id="head">
      <div className='nav'>
      <div className='logo'>
        <h1>PORTFOLIO</h1>
      </div>
      <div className="links">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">PROJECTS</Link></li>
          <li><Link to="/proj">CONTACT</Link></li>
        </ul>
      </div>

      </div>
    </section>
    )
}