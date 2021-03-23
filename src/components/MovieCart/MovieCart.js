import React from "react";

import "./MovieCart.scss";
import "../../styles/common/common.scss";

const MovieCart = ({ movieInfro }) => {
  const { Title, Year, Type, Poster } = movieInfro;
  console.log(Title, Year, Type, Poster);
  return (
    <div className="movie-cart">
      <div class="movie-cart__content">
        <div class="movie-cart__img">
          <img src={Poster} alt="" />
        </div>
        <h3 class="movie-cart__title">{Title}</h3>
        <div class="movie-cart__year">{Year}</div>
        <div class="movie-cart__type">{Type}</div>
        <div class="movie-cart__btn btn btn_blue">Movie details</div>
      </div>
    </div>
  );
};

export default MovieCart;
