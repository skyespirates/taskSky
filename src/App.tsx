import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
