import React from "react";

const MovieCurrentCart = ({ itemKey, itemValue }) => {
  console.log(itemKey, "-", itemValue);
  return (
    <>
      <span>{itemKey}</span>
      <span>{JSON.stringify(itemValue)}</span>
    </>
  );
};

export default MovieCurrentCart;
