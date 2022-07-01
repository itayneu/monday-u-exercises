import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Item } from "../Item/Item";
import { useItem } from "../../hooks/useItem";
import "./listItem.css";

export const ListItem = ({ itemsList, renderItems }) => {
  const { deleteItem, updateItem } = useItem();

  useEffect(() => {
    renderItems();
  }, [renderItems]);

  const handleItemDelete = async (item) => {
    await deleteItem(item.itemName);
    await renderItems();
  };

  const HandleItemUpdate = async (item) => {
    await updateItem(item);
    await renderItems();
  };

  const handleItemStatusUpdate = async (item) => {
    item.status = !item.status;
    await HandleItemUpdate(item);
  };

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

ListItem.propTypes = {
  itemsList: PropTypes.array,
  renderItems: PropTypes.func,
};

ListItem.defaultProps = {
  itemsList: [],
  renderItems: undefined,
};
