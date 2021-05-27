import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="bg-secondaryBackground fixed z-50 w-screen py-5 md:py-3">
      <nav className="container mx-auto flex justify-around px-2">
        <NavLink
          to="/"
          exact
          className="md:py-3 md:px-3 text-2xl md:text-4xl text-primaryText titleFont hover:text-white tracking-wide"
        >
          Home
        </NavLink>
        <NavLink
          to="/update"
          className="md:py-3 md:px-3 text-2xl md:text-4xl text-primaryText titleFont hover:text-white tracking-wide"
        >
          MY UPDATES
        </NavLink>
        <NavLink
          to="/project"
          className="md:py-3 md:px-3 text-2xl md:text-4xl text-primaryText titleFont hover:text-white tracking-wide"
        >
          MY PROJECTS
        </NavLink>
        <NavLink
          to="/contact"
          className="md:py-3 md:px-3 text-2xl md:text-4xl text-primaryText titleFont hover:text-white tracking-wide"
        >
          CONTACT ME
        </NavLink>
      </nav>
    </header>
  );
}
