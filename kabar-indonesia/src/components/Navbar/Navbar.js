import "./Navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="header">
        {/* <h1>jhjkf</h1> */}
      </div>
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/popular"}>Popular</NavLink>
        </li>
        <li>
          <NavLink to={"/politik"}>Politik</NavLink>
        </li>
        <li><a href="#">Ekonomi</a></li>
        <li><a href="#">Olahraga</a></li>
      </ul>
    </nav>
    </header>
  );
};

export default Navbar;
