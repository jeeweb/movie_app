import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, year, genres, summary }) {
  return (
    <li key={id} className={styles.movie_item}>
      <Link to={`/movie/${id}`} className={styles.movie_link_detail}>
        <div className={styles.movie_img_box}>
          <img src={coverImg} alt={title} className={styles.movie_img} />
        </div>
        <div className={styles.movie_info}>
          <h2 className={styles.movie_title}>{title}</h2>
          <p className={styles.movie_year}>{year}</p>
          <div className={styles.list_genres}>
            {genres
              ? genres.map((genre) => (
                  <span key={genre} className={styles.movie_genre}>
                    {genre}
                  </span>
                ))
              : null}
          </div>
          <div className={styles.movie_summary_box}>
            <p className={styles.movie_summary}>
              {summary ? (
                summary
              ) : (
                <span className={styles.no_text}>No summary</span>
              )}
            </p>
          </div>
          <div className={styles.movie_item__hover}>
            <h2 className={styles.movie_title}>{title}</h2>
            <div className={styles.icon_arrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6rem"
                height="6rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M13.705 4.284A1 1 0 1 0 12.3 5.708L17.67 11H4a1 1 0 1 0 0 2h13.665L12.3 18.285a1 1 0 0 0 1.403 1.424l6.925-6.822a1.25 1.25 0 0 0 0-1.78z"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
