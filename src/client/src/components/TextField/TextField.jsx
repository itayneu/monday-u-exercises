import React from "react";
import PropTypes from "prop-types";
import { TextField } from "monday-ui-react-core";
import "./textField.css";

export const TextFieldComponent = ({ placeholder, size, value, onChange }) => {
  return (
    <TextField
      className="list-item-input"
      placeholder={placeholder}
      size={size}
      value={value}
      onChange={onChange}
    />
  );
};

TextFieldComponent.propTypes = {
  placeholder: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

TextFieldComponent.defaultProps = {
  label: "Send",
  size: TextField.sizes.MEDIUM,
  onClick: undefined,
};
