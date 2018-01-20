import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul className="nav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/battle">Battle</Link>
      </li>
      <li>
        <Link to="/popular">Popular</Link>
      </li>
    </ul>
  );
}

module.exports = Nav;
