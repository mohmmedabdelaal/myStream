import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="ui secondary pointing menu">
      <a href="/streams/new">newpage</a>
      <Link to="/" className="item">
        Streamy
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
