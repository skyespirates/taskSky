import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import "./style.css";

const Header = () => {
  const { state, dispatch } = useContext(ThemeContext);
  console.log(state);
  const [show, setShow] = useState(false);

  const toggleTheme = () => {
    const body = document.querySelector("body") as HTMLBodyElement;
    body.classList.toggle("light-theme");
    dispatch({ type: "CHANGE_THEME" });
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
            <i
              className={`bx bxs-${state.theme === "dark" ? "moon" : "sun"}`}
              id="theme-button"
            ></i>
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
