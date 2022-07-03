import React from "react";
import PropTypes from "prop-types";
import { Loader } from "monday-ui-react-core";

export const LoaderComponent = ({ color, size }) => {
  //   return <Loader color={color} size={size} />;
  return (
    <div align="center">
      <Loader
        className="list-loader"
        color={Loader.colors.SECONDARY}
        size={Loader.sizes.SMALL}
      />
    </div>
  );
};

LoaderComponent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};
