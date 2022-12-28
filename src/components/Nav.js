import React from "react";
import { Link } from "react-router-dom";
// 這是做Nav的地方
const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/react-photo-fetch">Home</Link>
        </li>
        <li>
          <Link to="/react-photo-fetch/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
