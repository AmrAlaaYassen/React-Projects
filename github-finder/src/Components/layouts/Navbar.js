import React from "react";
import {Link} from 'react-router-dom'
const Navbar = props => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className="fa fa-github" aria-hidden="true" /> <span></span>
        {props.title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
};
export default Navbar;
