import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./style.css";

const Header = () => {
  const [show, setShow] = useState(false);

  const body = document.querySelector("body");
  const btn = document.getElementById("theme-button");

  // Dark/Light Theme
  const lightTheme = "light-theme";
  const iconTheme = "bxs-moon";

  // Previosly selected theme
  const selectedTheme = localStorage.getItem("selected-theme");
  const selectedIcon = localStorage.getItem("selected-icon");

  // Obtain current theme and icon
  const getCurrentTheme = () =>
    body?.classList.contains(lightTheme) ? "light" : "dark";
  const getCurrentIcon = () =>
    btn?.classList.contains(iconTheme) ? "bxs-sun" : "bxs-moon";

  useEffect(() => {
    if (selectedTheme) {
      document.body.classList[selectedTheme === "light" ? "add" : "remove"](
        lightTheme
      );
      btn?.classList[selectedIcon === "bxs-sun" ? "add" : "remove"](iconTheme);
    }
  }, []);

  const toggleTheme = () => {
    const btn = document.getElementById("theme-button");
    console.log(btn);
    body?.classList.toggle(lightTheme);
    btn?.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  };
  return (
    <header>
      <nav className="nav">
        <a href="#" className="nav__logo">
          Task<span>Sky</span>
        </a>
        <div className={`nav__menu ${show ? "show-menu" : ""}`}>
          <ul className="nav__items">
            <NavLink
              onClick={() => setShow(!show)}
              to="/"
              className="nav__item"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setShow(!show)}
              to="/about"
              className="nav__item"
            >
              About
            </NavLink>
          </ul>
        </div>
        {/* Nav Buttons */}
        <div className="nav__buttons">
          <button className="toggle__theme" onClick={toggleTheme}>
            <i className="bx bxs-sun bxs-moon" id="theme-button"></i>
          </button>
          <a href="https://github.com/skyespirates/taskSky" target="_blank">
            <i className="bx bxl-github"></i>
          </a>
          <div className="toggle__menu" onClick={() => setShow(!show)}>
            {show ? (
              <i className="bx bx-x"></i>
            ) : (
              <i className="bx bx-menu"></i>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
