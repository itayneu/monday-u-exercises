import React from "react";
import PropTypes from "prop-types";
import "./checkbox.css";

export const Checkbox = ({ isChecked, onChange, value }) => {
  const handleChange = () => {
    onChange && onChange(value);
  };

  return (
    <input
      type="checkbox"
      className="list-item-checkbox"
      checked={isChecked}
      onChange={handleChange}
    ></input>
  );
};

Checkbox.propTypes = {
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.bool,
};
