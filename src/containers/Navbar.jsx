import React from "react";
import "./../assets/styles/containers/navbar.css";
import Text from "../components/Text";
import { NavLink } from "react-router";
import ThemeToggle from "../components/ThemeToggle";
import routes from "../routes/data";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Text txtData={{ type: "h3" }}>Gark</Text>
      </div>
      <div className="navbar-menu">
        <NavLink to={routes.HOME}>Home</NavLink>
        <NavLink to={routes.BUTTONS}>Buttons</NavLink>
        <NavLink to={routes.LINKS}>Links</NavLink>
        <NavLink to={routes.TEXTS}>Texts</NavLink>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
