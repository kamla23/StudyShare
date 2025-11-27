import React, { useState } from "react";
import "../styles/navbar.css";

const Navbar = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", page: "home" },
    { name: "Explore", page: "dashboard" },
    { name: "Login", page: "login" },
    { name: "Signup", page: "signup" },
  ];

  return (
    <header className="navbar">
      <div className="nav-container">
        <h1 className="logo" onClick={() => onNavigate("home")}>
          IdeaFlow
        </h1>

        <nav className="nav-links">
          {navItems.map((item) => (
            <a key={item.name} onClick={() => onNavigate(item.page)}>
              {item.name}
            </a>
          ))}
          <button
            className="primary-btn"
            onClick={() => onNavigate("addIdea")}
          >
            + Add Idea
          </button>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <a
              key={item.name}
              onClick={() => {
                onNavigate(item.page);
                setIsMenuOpen(false);
              }}
            >
              {item.name}
            </a>
          ))}
          <button
            className="primary-btn"
            onClick={() => onNavigate("addIdea")}
          >
            + Add Idea
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;



