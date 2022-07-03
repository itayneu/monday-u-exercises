import React from "react";
import PropTypes from "prop-types";
import { ButtonGroup } from "monday-ui-react-core";
import "./buttonGroup.css";

export const ButtonGroupComponent = ({ value, onSelect, options, size }) => {
  return (
    <div className="list-item-filter">
      <ButtonGroup
        groupAriaLabel="button group aria label"
        value={value}
        onSelect={onSelect}
        options={options}
        size={size}
      />
    </div>
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
