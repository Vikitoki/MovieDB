import React from "react";

const MovieCurrentCart = ({ itemKey, itemValue }) => {
  return (
    <>
      <span>{itemKey}</span>
      <span>
        {typeof itemValue === "object" || itemKey === "Poster"
          ? "----"
          : itemValue}
      </span>
    </>
  );
};

export default MovieCurrentCart;
