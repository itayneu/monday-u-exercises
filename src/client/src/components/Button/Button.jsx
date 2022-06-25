import React from "react";
import PropTypes from "prop-types";
import "./button.css";

export const Button = ({ label, onClick }) => {
  return (
    <button type="button" className="list-item-submit" onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: "Send",
  onClick: undefined,
};
