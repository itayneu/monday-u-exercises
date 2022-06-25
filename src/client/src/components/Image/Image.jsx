import React from "react";
import PropTypes from "prop-types";
import "./image.css";

export const Image = ({ src, onClick }) => {
  return (
    <img
      src={src}
      className="list-item-delete-button"
      alt=""
      onClick={onClick}
    ></img>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  onClick: PropTypes.func,
};
