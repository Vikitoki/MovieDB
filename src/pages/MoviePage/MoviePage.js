import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import fetchCurrentMovie from "../../redux/services/fetchCurrentMovies";

import MovieCurrentCart from "../../components/MovieCurrentCart/MovieCurrentCart";

import "./MoviePage.scss";

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
    <>
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
            <div class="movie-page__btn">
              <Link to="/" exact class="btn btn_blue">
                Go back to search
              </Link>
            </div>
            <div className="movie-page__btn movie-page__btn_show">
              <a
                href={
                  currentMovie
                    ? `https://www.imdb.com/title/${currentMovie.imdbID}`
                    : "#"
                }
                target="_blank"
                class="btn btn_blue"
              >
                Show this film on IMDB
              </a>
            </div>
          </div>
        </div>
      )}
    </>
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
