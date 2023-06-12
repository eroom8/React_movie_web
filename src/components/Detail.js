import "../styles/Detail.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

function Detail() {
  const [movie, setMovie] = useState({});
  const params = useParams();

  const cutDate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) : str;
  };

  //fetching individual movie details
  const fetchMovieDetails = async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=9bd472a6aa7616f90a6f03d11e79060b`
    );
    setMovie(data.data);
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  return (
    <section className="movie-details">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{movie?.title || movie?.original_title || movie?.name}</title>
      </Helmet>
      <div className="movie-wrapper">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie?.title || movie?.original_title || movie?.name}
        />
        <div className="details">
          <div>
            <h2>{movie?.title || movie?.original_title || movie?.name}</h2>
            <p>
              {cutDate(movie.release_date, 5) || "2022"}. {movie.runtime} min.
              4k
            </p>
          </div>
          <p className="description">{movie.overview}</p>
          <div className="genres">
            {movie.genres &&
              movie?.genres.map((genre) => <p key={genre.id}> {genre.name}</p>)}
          </div>
          <button>Watch Now</button>
        </div>
      </div>
    </section>
  );
}
export default Detail;
