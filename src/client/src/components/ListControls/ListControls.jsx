import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useItem } from "../../hooks/useItem";
import "./listControls.css";

export const ListControls = ({ renderItems }) => {
  const { addItem } = useItem();
  const [inputValue, setInputValue] = useState();

  const handleItem = async () => {
    await addItem(inputValue);
    await renderItems();

    setInputValue("");
  };

  return (
    <div className="list-controls">
      <Input
        placeholder={"Add your new todo"}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button label={"+"} onClick={handleItem}></Button>
    </div>
  );
};

ListControls.propTypes = {
  renderItems: PropTypes.func,
};
