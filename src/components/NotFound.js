import { Link } from "react-router-dom";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <div className="notFoundPage">
      <h1 className="heading">404</h1>
      <Link to="/">
        <button className="btn">Return Home</button>
      </Link>
    </div>
  );
}

export default NotFound;
