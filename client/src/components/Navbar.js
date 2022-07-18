import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

function Navbar() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>MyStream</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/" activeClassName={classes.actives}>
              Stream List
            </NavLink>
          </li>

          <li>
            <NavLink to="/streams/new" activeClassName={classes.active}>
              Create Stream
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
