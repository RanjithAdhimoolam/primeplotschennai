import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo">
          Prime<span>Plots</span>Chennai
        </Link>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </li>

          <li>
            <Link
              to="/booking"
              className="book-btn"
              onClick={() => setMenuOpen(false)}
            >
              Book Visit
            </Link>
          </li>
        </ul>

        <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
