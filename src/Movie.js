import React from "react";
import PropTypes from "prop-types";
import "./App.css"

function Movie({year, title, summary, poster, genres}) {
return (
    <div className="movie">
        <img src={poster} alt={title} title={title}></img>
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <p className="movie__year">{year}</p>
            <ul className="genres">
                {genres.map((genre, index) => (
                    <li key={index} className ="genres__genre">{genre}</li>
                ))}
            </ul>
            <p className="movie__summary">{summary.slice(0, 129)}...</p>
        </div>
    </div>
)}
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;