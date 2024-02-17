import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, genres, summary }) {
  return (
    <li key={id}>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <div>
        {genres
          ? genres.map((genre) => <span key={genre}> {genre} </span>)
          : null}
      </div>
      <p>{summary}</p>
    </li>
  );
}

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
