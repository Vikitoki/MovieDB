import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { searchMovie } from "../../redux/search/action-creators";
import fetchMovies from "../../redux/services/fetchMovies";
import "./Intro.scss";

const Intro = ({ loading, text, setStateText, fetchMovies }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setStateText(inputValue);
  }, [inputValue]);

  const submitHundler = (event) => {
    event.preventDefault();
    fetchMovies(inputValue);
    setInputValue("");
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
                    onChange={(event) => setInputValue(event.target.value)}
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
        <div className="intro__bottom"></div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.movies.loading,
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
