import React, { useEffect } from "react";
import { connect } from "react-redux";

import fetchCurrentMovie from "../../redux/services/fetchCurrentMovies";

import MovieCurrentCart from "../../components/MovieCurrentCart/MovieCurrentCart";

const MoviePage = ({
  match,
  currentMovie,
  loading,
  error,
  fetchCurrentMovie,
}) => {
  const currentMovieId = match.params.id;

  useEffect(() => {
    fetchCurrentMovie(currentMovieId);
  }, [currentMovieId]);

  return (
    <div>
      {loading ? (
        <h2>Loading</h2>
      ) : error ? (
        <h2>Error</h2>
      ) : (
        <div className="movie-page">
          <div className="movie-page__content">
            <ul className="movie-page__list">
              {currentMovie
                ? Object.keys(currentMovie).map((item) => (
                    <li key={Math.random()}>
                      <MovieCurrentCart
                        itemKey={item}
                        itemValue={currentMovie[item]}
                      />
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>

        // Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John
        // Lithgow" Awards: "Won 1 Oscar. Another 43 wins & 148 nominations."
        // BoxOffice: "$188,020,017" Country: "USA, UK, Canada" DVD: "24 May
        // 2016" Director: "Christopher Nolan" Genre: "Adventure, Drama,
        // Sci-Fi" Language: "English"
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentMovie: (id) => dispatch(fetchCurrentMovie(id)),
});

const mapStateToProps = (state) => ({
  currentMovie: state.currentMovie.currentMovie,
  loading: state.currentMovie.loadingCurrent,
  error: state.currentMovie.currentError,
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
