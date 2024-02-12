import { NavLink } from "react-router-dom";
import { useEffect, useState, useContext, forwardRef } from "react";
import { ThemeContext } from "../../context/themeContext";

const Header = forwardRef((_, ref) => {
  const { state, dispatch } = useContext(ThemeContext);
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const htmlTag = document.querySelector("html");
    htmlTag?.classList.toggle("dark");
  }, [state.theme]);

  const handleClick = () => {
    dispatch({ type: "CHANGE_THEME" });
  };

  const changeBackground = () => {
    if (window.scrollY >= 48) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header
      ref={ref}
      className={`dark:bg-slate-800 dark:text-white sticky top-0 z-10 ${
        scrolled ? "bg-purple-500" : ""
      }`}
    >
      <nav className=" flex justify-between items-center py-2 px-8">
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
          <NavLink
            onClick={() => setShow(!show)}
            to="/search"
            className={({ isActive }) => (isActive ? "text-red-600" : "")}
          >
            Search
          </NavLink>
        </div>
        {/* Nav Buttons */}
        <div className="text-2xl space-x-2">
          <button className="" onClick={handleClick}>
            {state.theme === "dark" ? (
              <i className="bx bx-sun"></i>
            ) : (
              <i className="bx bx-moon" id="theme-button"></i>
            )}
          </button>
          <a href="https://github.com/skyespirates/taskSky" target="_blank">
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </nav>
    </header>
  );
});

export default Header;
