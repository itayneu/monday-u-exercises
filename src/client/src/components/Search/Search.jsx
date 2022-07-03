import React from "react";
import PropTypes from "prop-types";
import { Search } from "monday-ui-react-core";
import "./search.css";

export const SearchComponent = ({ placeholder, loading, size, onChange }) => {
  return (
    <div className="list-item-search">
      <Search
        placeholder={placeholder}
        loading={loading}
        size={size}
        onChange={onChange}
      />
    </div>
  );
};

SearchComponent.propTypes = {
  placeholder: PropTypes.string,
  loading: PropTypes.bool,
  size: PropTypes.string,
  onChange: PropTypes.func,
};

SearchComponent.defaultProps = {
  placeholder: "",
  loading: false,
  size: Search.sizes.small,
  onChange: undefined,
};
