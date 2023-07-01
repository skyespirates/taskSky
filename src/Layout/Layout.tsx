import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { ThemeProvider } from "../context/themeContext.tsx";

const Layout = () => {
  return (
    <div className="container">
      <ThemeProvider>
        <Header />
      </ThemeProvider>
      <Outlet />
    </div>
  );
};

export default Layout;
