import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  console.log(user);
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>MyStream</div>
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/" activeclassname={classes.actives}>
              Stream List
            </NavLink>
          </li>

          <li>
            <NavLink to="/streams/new" activeclassname={classes.active}>
              Create Stream
            </NavLink>
          </li>
          {!isAuthenticated && (
            <li>
              <button className="btn" onClick={() => loginWithRedirect()}>
                <i className="google icon"></i>
                Login
              </button>
            </li>
          )}
          {isAuthenticated && (
            <li>
              <button
                className="btn"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                <i className="google icon"></i>
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
