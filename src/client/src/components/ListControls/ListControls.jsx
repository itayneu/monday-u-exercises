import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { TextFieldComponent } from "../TextField/TextField";
import { ButtonComponent } from "../Button/Button";
import { getItemsList } from "../../selectors/itemsEntitiesSelectors";
import { addItemAction } from "../../actions/itemsEntitiesActions";
import {
  filterListAction,
  setFilterAction,
} from "../../actions/itemsViewActions";
import "./listControls.css";

const ListControls = ({ addItemAction, filterListAction, setFilterAction }) => {
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

const mapStateToProps = (state, ownProps) => {
  const itemsList = getItemsList(state);

  return { itemsList };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    { addItemAction, filterListAction, setFilterAction },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ListControls);
