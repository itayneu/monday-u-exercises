import React from "react";
import PropTypes from "prop-types";
import { ButtonGroup } from "monday-ui-react-core";

export const ButtonGroupComponent = ({ value, onSelect, options, size }) => {
  return (
    <ButtonGroup
      groupAriaLabel="button group aria label"
      value={value}
      onSelect={onSelect}
      options={options}
      size={size}
    />
  );
};

ButtonGroup.propTypes = {
  value: PropTypes.string,
  onSelect: PropTypes.func,
  options: PropTypes.array,
  size: PropTypes.string,
};

ButtonGroup.defaultProps = {
  value: "",
  onSelect: undefined,
  options: [],
  size: ButtonGroup.sizes.SMALL,
};
