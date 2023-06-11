import { useState } from "react";
import "./style.css";

const Header = () => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    console.log(show);
    setShow(!show);
  };
  return (
    <header>
      <nav className="nav">
        <a href="#" className="nav__logo">
          Task<span>Sky</span>
        </a>
        <div className={`nav__menu ${show ? "show-menu" : ""}`}>
          <ul className="nav__items">
            <li className="nav__item">
              <a className="nav__link" href="#">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
        {/* Nav Buttons */}
        <div className="nav__buttons">
          <i className="bx bxs-moon"></i>
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
