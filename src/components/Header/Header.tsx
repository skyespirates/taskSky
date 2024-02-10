import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

const Header = () => {
  const { state, dispatch } = useContext(ThemeContext);
  const [show, setShow] = useState(false);

  const toggleTheme = () => {
    const body = document.querySelector("body") as HTMLBodyElement;
    body.classList.toggle("light-theme");
    dispatch({ type: "CHANGE_THEME" });
  };
  return (
    <header className="">
      <nav className="border flex justify-between items-center py-2 px-8">
        <a href="/" className="text-2xl">
          {" "}
          = Task<span className="text-blue-600">Sky</span>
        </a>
        <div className="space-x-4">
          <NavLink
            onClick={() => setShow(!show)}
            to="/"
            className={({ isActive }) => (isActive ? "text-red-600" : "")}
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setShow(!show)}
            to="/about"
            className={({ isActive }) => (isActive ? "text-red-600" : "")}
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setShow(!show)}
            to="/anime"
            className={({ isActive }) => (isActive ? "text-red-600" : "")}
          >
            Anime
          </NavLink>
        </div>
        {/* Nav Buttons */}
        <div className="text-2xl space-x-2">
          <button className="">
            <i className="bx bx-moon" id="theme-button"></i>
          </button>
          <a href="https://github.com/skyespirates/taskSky" target="_blank">
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
