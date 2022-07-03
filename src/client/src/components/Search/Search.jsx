import React from "react";
import PropTypes from "prop-types";
import { Search } from "monday-ui-react-core";
import "./search.css";

export const SearchComponent = ({ placeholder, size, onChange }) => {
  return (
    <div className="list-item-search">
      <Search placeholder={placeholder} size={size} onChange={onChange} />
    </div>
  );
};

SearchComponent.propTypes = {
  placeholder: PropTypes.string,
  size: PropTypes.string,
  onChange: PropTypes.func,
};

SearchComponent.defaultProps = {
  placeholder: "",
  size: Search.sizes.small,
  onChange: undefined,
};
