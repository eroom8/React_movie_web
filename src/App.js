import Catalog from "./components/Catalog";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Notfound from "./components/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./components/Detail";
import { useEffect, useState } from "react";
import axios from "axios";
import New from "./components/New";

function App() {
  const [movies, setMovies] = useState([]);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/trending/all/week?api_key=9bd472a6aa7616f90a6f03d11e79060b&language=en-US`
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchMovies = async () => {
    const res = await axios.get(url);
    setMovies(res.data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies, url]);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header setSort={setUrl} />
                <Catalog movies={movies} />
                <Footer />
              </>
            }
          />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/new" element={<New />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
