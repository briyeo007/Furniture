import { useState } from "react";
import "./Header.scss";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Feature Collection", href: "#feature-collection" },
    { label: "Our Home", href: "#our-home" },
    { label: "Shop by Collection", href: "#shop-by-collection" },
    { label: "Support", href: "#support" },
    { label: "Shop by Style", href: "#shop-by-style" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? "header--menu-open" : ""}`}>
      <div className="header__inner">
        <h1 className="header__logo">
          <a href="#">
            <span className="blind">LIVING SPACES</span>
          </a>
        </h1>
        <div className="header__icons">
          <a href="#" className="header__user" aria-label="User">
            <span className="blind">login</span>
          </a>
          <button
            className={`header__menu ${isMenuOpen ? "header__menu--open" : ""}`}
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <span className="header__menu-bar"></span>
            <span className="header__menu-bar"></span>
            <span className="blind">menu</span>
          </button>
        </div>
      </div>

      <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
        <ul className="header__nav-list">
          {menuItems.map((item, index) => (
            <li key={index} className="header__nav-item">
              <a href={item.href} className="header__nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className={`header__overlay ${isMenuOpen ? "header__overlay--open" : ""}`}
        onClick={toggleMenu}
      />
    </header>
  );
}
