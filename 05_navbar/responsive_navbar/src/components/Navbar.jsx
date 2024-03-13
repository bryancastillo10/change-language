/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

const NavMenu = [
  { id: "1", section: "About", link: "/about" },
  { id: "2", section: "Products", link: "/products" },
  { id: "3", section: "Services", link: "/services" },
  { id: "4", section: "Contact", link: "/contact" },
];
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Company Website
      </Link>
      {/* Hamburger Menu */}
      <div
        className="menu"
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={openMenu ? "open" : ""}>
        {NavMenu.map((menu) => (
          <li key={menu.id}>
            <NavLink to={menu.link}>{menu.section}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
