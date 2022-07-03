import React from "react";
import PropTypes from "prop-types";
import { Checkbox } from "monday-ui-react-core";
import "./checkbox.css";

export const CheckboxComponent = ({ isChecked, onChange }) => {
  return (
    <Checkbox
      className="list-item-checkbox"
      checked={isChecked}
      onChange={onChange}
    ></Checkbox>
  );
};

Checkbox.propTypes = {
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  isChecked: false,
  onChange: undefined,
};
