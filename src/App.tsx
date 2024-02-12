import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";

// pages
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Anime from "./pages/Anime";
import AnimeDetails from "./pages/AnimeDetails";
import SearchAnime from "./pages/SearchAnime";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="anime" element={<Anime />} />
        <Route path="anime/:id" element={<AnimeDetails />} />
        <Route path="search" element={<SearchAnime />} />
      </Route>
    </Routes>
  );
};

export default App;
