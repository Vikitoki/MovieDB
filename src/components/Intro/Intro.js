import React, { useState } from "react";
import { connect } from "react-redux";

import { searchMovie } from "../../redux/search/action-creators";
import fetchMovies from "../../redux/services/fetchMovies";
import MovieCart from "../MovieCart/MovieCart";
import "./Intro.scss";

const Intro = ({ loading, setStateText, fetchMovies, error, moviesList }) => {
  const [inputValue, setInputValue] = useState("");

  const submitHundler = (event) => {
    event.preventDefault();
    setStateText(inputValue);
    fetchMovies(inputValue);
    setInputValue("");
  };

  const handlerSearch = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <section className="intro">
      <div className="intro__container container">
        <div className="intro__top">
          <div className="intro__search search-intro">
            <form
              onSubmit={submitHundler}
              action="#"
              className="search-intro__form"
            >
              <h2 className="search-intro__title">Введите название фильма</h2>
              <div className="search-intro__content">
                <div className="search-intro__item">
                  <input
                    type="text"
                    name="searchFilm"
                    className="search-intro__input"
                    onChange={handlerSearch}
                    value={inputValue}
                  />
                </div>
                <div className="search-intro__btn">
                  <button type="submit">Найти</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="intro__bottom">
          {loading && <span>Loading</span>}
          {moviesList.Response === "False" ? (
            <span>Sorry but we cant find thi film , pls try again</span>
          ) : null}
          {error ? <span>Error</span> : null}
          {moviesList.Search ? (
            <ul className="search-intro__list">
              {moviesList.Search.map((item) => {
                return (
                  <li key={`${Math.random()}`}>
                    <MovieCart movieInfro={item} />
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.movies.loading,
    error: state.movies.error,
    moviesList: state.movies.moviesList,
    text: state.movies.text,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStateText: (text) => dispatch(searchMovie(text)),
    fetchMovies: (text) => dispatch(fetchMovies(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
