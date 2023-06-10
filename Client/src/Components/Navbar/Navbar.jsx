import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
      <nav className="primary-nav">
        <ul role="list">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/create" className="nav-link">
              Create
            </Link>
          </li>
          <li>
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
  );
}
