import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui segment">
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        <h4 class="ui black header">Streamer</h4>
      </Link>
        <div className="right menu">
        <Link to="/" className="item">
          <h4 class="ui black header">All Streams</h4>
        </Link>
        <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

export default Header;
