import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar from './../Navbar/Navbar';
import Homepage from './../HomePage/Homepage';

const Layout = () => {
  return (
    <div>
      <ul>
        <li>
          {/* <Link to="/Homepage">Homepage</Link> */}
        </li>
        <li>
          {/* <Link to="/Homepage">HomePage</Link> */}
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Layout;
