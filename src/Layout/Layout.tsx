import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { ThemeProvider } from "../context/themeContext.tsx";
import { useRef } from "react";
const Layout = () => {
  const headerRef = useRef(null);
  return (
    <div className="relative">
      <ThemeProvider>
        <Header ref={headerRef} />
      </ThemeProvider>
      <main className="px-20 min-h-[200vh] py-6 dark:bg-slate-800 dark:text-white">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
