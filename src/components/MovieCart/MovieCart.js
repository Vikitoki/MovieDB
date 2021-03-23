import React from "react";
import { Link } from "react-router-dom";

import "./MovieCart.scss";
import "../../styles/common/common.scss";

const MovieCart = ({ movieInfro }) => {
  const { Title, Year, Type, Poster, imdbID } = movieInfro;
  return (
    <div className="movie-cart">
      <div className="movie-cart__content">
        <div className="movie-cart__img">
          <img src={Poster} alt="" />
        </div>
        <h3 className="movie-cart__title">{Title}</h3>
        <div className="movie-cart__year">{Year}</div>
        <div className="movie-cart__type">{Type}</div>
        <Link to={`/movie/${imdbID}`} className="movie-cart__btn btn btn_blue">
          Movie details
        </Link>
      </div>
    </div>
  );
};

export default MovieCart;
