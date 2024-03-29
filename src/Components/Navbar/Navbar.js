import "../Navbar/Navbar.scss";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="header">
      <Link href="/" className="header__logo-link">
        <h1 className="header__logo">Esmeralda's Salty Air Retreat</h1>
      </Link>
      <nav className="header__nav">
        <ul className="header__link-container">
          <Link href="/about">
            <li className="header__nav-item nav-items">About</li>
          </Link>
          <Link href="/">
            <li className="header__nav-item nav-items">Events</li>
          </Link>
          <Link href="https://squareup.com/appointments/book/8c805443-b0f7-4e3a-b3fe-40e11b7419f5/ZTP8PZRX5ME1Y/start">
            <li className="header__nav-item nav-items">Book Now</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
