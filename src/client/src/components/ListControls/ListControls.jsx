import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useItem } from "../../hooks/useItem";
import { getItemsList } from "../../selectors/itemsEntitiesSelectors";
import { addAction } from "../../actions/itemsEntitiesActions";
import "./listControls.css";

const ListControls = ({ addAction }) => {
  const { addItem } = useItem();
  const [inputValue, setInputValue] = useState("");

  const onUserChange = useCallback(
    (e) => {
      setInputValue(e.target.value);
    },
    [setInputValue]
  );

  const handleItem = useCallback(async () => {
    await addItem(inputValue);
    addAction({ itemName: inputValue });

    setInputValue("");
  }, [addAction, addItem, inputValue]);

  return (
    <div className="list-controls">
      <Input
        placeholder={"Add your new todo"}
        value={inputValue}
        onChange={onUserChange}
      />
      <Button label={"+"} onClick={handleItem}></Button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemsList = getItemsList(state);

  return { itemsList };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ addAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ListControls);

ListControls.propTypes = {
  renderItems: PropTypes.func,
};

ListControls.defaultProps = {
  renderItems: undefined,
};
