import { Link } from "react-router-dom";
import "../styles/Catalog.css";
import { Helmet } from "react-helmet";

function Catalog({ movies }) {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const cutDate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) : str;
  };
  return (
    <section className="movies">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Catalog - All Movies</title>
      </Helmet>
      {movies?.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
          <div className="movie">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie?.title || movie?.original_title || movie?.name}
            />
            <div className="title">
              <p>
                {truncate(
                  movie?.title || movie?.original_title || movie?.name,
                  15
                )}
              </p>
              <p>{cutDate(movie.release_date, 5) || "2022"}</p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default Catalog;
