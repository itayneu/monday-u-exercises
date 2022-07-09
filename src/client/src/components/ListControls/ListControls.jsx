import React, { useState, useCallback } from "react";
import { TextFieldComponent } from "../TextField/TextField";
import { ButtonComponent } from "../Button/Button";
import "./listControls.css";

const ListControls = ({ addItemAction }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = useCallback(
    (e) => {
      setInputValue(e);
    },
    [setInputValue]
  );

  const handleItem = useCallback(async () => {
    addItemAction({ itemName: inputValue });

    setInputValue("");
  }, [addItemAction, inputValue]);

  return (
    <div className="list-controls">
      <TextFieldComponent
        placeholder={"Add your new todo"}
        value={inputValue}
        onChange={onInputChange}
      />
      <ButtonComponent label={"+"} onClick={handleItem}></ButtonComponent>
    </div>
  );
};

export default ListControls;
