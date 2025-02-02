import "../Navbar/Navbar.scss";
import React from "react";
import Link from "next/link";
import { Instagram, Facebook } from "@mui/icons-material";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link href="/" className="nav__logo-link nav-items">
        <h1 className="header__logo">Esmeralda's Salty Air Retreat</h1>
      </Link>
      <ul className="nav__link-container">
        <Link href="/">
          <li className="nav__nav-item nav-items">Home</li>
        </Link>
        <Link
          href="https://squareup.com/appointments/book/8c805443-b0f7-4e3a-b3fe-40e11b7419f5/ZTP8PZRX5ME1Y/start"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className="nav__nav-item nav-items">Book Now</li>
        </Link>
        <Link href="/about">
          <li className="nav__nav-item nav-items">About</li>
        </Link>
        <a
          className="nav__link icon nav-items"
          href="https://www.instagram.com/esmeraldassaltyairretreat/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram style={{ fontSize: "30px", height: "30px" }} />
        </a>
        <a
          className="nav__link icon nav-items"
          href="https://www.facebook.com/profile.php?id=100067194408450"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook style={{ fontSize: "30px", height: "30px" }} />
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
