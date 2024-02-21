import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      {loading ? (
        <div className={styles.loading}>
          <LoadingSpinner />
        </div>
      ) : (
        <div className={styles.container}>
          <Link to={"/"} className={styles.movie_link_back}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3em"
              height="3em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </Link>
          <div className={styles.movie_detail}>
            <div className={styles.movie_detail_top}>
              <div className={styles.movie_img_box}>
                <img
                  src={movie.medium_cover_image}
                  alt={movie.title}
                  className={styles.movie_img}
                />
              </div>
              <div className={styles.movie_info}>
                <h1 className={styles.movie_title}>{movie.title}</h1>
                <p className={styles.movie_year}>{movie.year}</p>
                <div className={styles.list_genres}>
                  {movie.genres
                    ? movie.genres.map((genre) => (
                        <span key={genre} className={styles.movie_genre}>
                          {genre}
                        </span>
                      ))
                    : null}
                </div>
              </div>
            </div>
            <div className={styles.movie_summary_box}>
              <p className={styles.movie_summary}>{movie.description_full}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Detail;
