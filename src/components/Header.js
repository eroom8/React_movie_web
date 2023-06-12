import { Link } from "react-router-dom";
import "../styles/Header.css";
import { useState } from "react";

function Header({ setSort }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <header>
        <Link to="/">
          <h1>Movies App</h1>
        </Link>
        <div className="buttons">
          <button
            className="sort-button"
            onClick={() => setShow((prev) => !prev)}
          >
            Sort Movies
          </button>
          <Link to="/new">
            <button className="add-button">Add Movie</button>
          </Link>
        </div>
      </header>
      {show && <DropDown setSort={setSort} />}
    </>
  );
}

const DropDown = ({ setSort }) => {
  return (
    <>
      <div className="dropdown">
        <p
          onClick={() =>
            setSort(
              `https://api.themoviedb.org/3/movie/top_rated?api_key=9bd472a6aa7616f90a6f03d11e79060b&language=en-US`
            )
          }
        >
          Top Rated
        </p>
        <p
          onClick={() =>
            setSort(
              `https://api.themoviedb.org/3/movie/popular?api_key=9bd472a6aa7616f90a6f03d11e79060b&language=en-US`
            )
          }
        >
          Popular
        </p>
        <p
          onClick={() =>
            setSort(
              `https://api.themoviedb.org/3/movie/upcoming?api_key=9bd472a6aa7616f90a6f03d11e79060b&language=en-US`
            )
          }
        >
          Upcoming
        </p>
      </div>
    </>
  );
};

export default Header;
