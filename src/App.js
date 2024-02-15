import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <div>
                {movie.genres
                  ? movie.genres.map((genre) => (
                      <span key={genre}> {genre} </span>
                    ))
                  : null}
              </div>
              <p>{movie.summary}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
