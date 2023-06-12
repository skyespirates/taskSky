import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

import "./style.css";

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;