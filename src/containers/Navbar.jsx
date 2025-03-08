import React from "react";
import "./../assets/styles/containers/navbar.css";
import Text from "../components/Text";
import { NavLink } from "react-router";
import ThemeToggle from "../components/ThemeToggle";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Text txtData={{ type: "h3" }}>Gark</Text>
      </div>
      <div className="navbar-menu">
        <NavLink to="/">Home - Buttons</NavLink>
        <NavLink to="/texts">Texts</NavLink>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
