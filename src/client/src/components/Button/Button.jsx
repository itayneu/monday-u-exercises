import React from "react";
import PropTypes from "prop-types";
import { Button } from "monday-ui-react-core";
import "./button.css";

export const ButtonComponent = ({ label, onClick }) => {
  return (
    <Button className="list-item-submit" onClick={onClick} marginLeft={true}>
      {label}
    </Button>
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
