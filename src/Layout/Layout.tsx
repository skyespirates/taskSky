import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { ThemeProvider } from "../context/themeContext.tsx";

const Layout = () => {
  return (
    <>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
      <main className="px-20 min-h-screen py-6">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
