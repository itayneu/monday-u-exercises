import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Item } from "../Item/Item";
import { useItem } from "../../hooks/useItem";
import { getItemsList } from "../../selectors/itemsEntitiesSelectors";
import {
  removeAction,
  updateAction,
  loadAction,
} from "../../actions/itemsEntitiesActions";
import "./listItem.css";

const ListItem = ({ itemsList, removeAction, updateAction, loadAction }) => {
  const { getItems, deleteItem, updateItem } = useItem();

  useEffect(() => {
    loadItems();
  }, []);

  const handleItemDelete = useCallback(
    async (item) => {
      await deleteItem(item.itemName);
      removeAction(item);
    },
    [deleteItem, removeAction]
  );

  const HandleItemUpdate = useCallback(
    async (item) => {
      await updateItem(item);
      updateAction(item);
    },
    [updateAction, updateItem]
  );

  const handleItemStatusUpdate = async (item) => {
    item.status = !item.status;
    await HandleItemUpdate(item);
  };

  const loadItems = useCallback(async () => {
    loadAction(await getItems());
  }, [getItems, loadAction]);

  return (
    <ul className="list">
      {itemsList.map((item, index) => {
        return (
          <Item
            key={index}
            item={item}
            handleItemDelete={() => handleItemDelete(item)}
            HandleItemUpdate={() => handleItemStatusUpdate(item)}
          />
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemsList = getItemsList(state);

  return { itemsList };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    { removeAction, updateAction, loadAction },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);

ListItem.propTypes = {
  itemsList: PropTypes.array,
  renderItems: PropTypes.func,
};

ListItem.defaultProps = {
  itemsList: [],
  renderItems: undefined,
};
