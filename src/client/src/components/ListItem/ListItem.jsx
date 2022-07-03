import React, { useEffect, useCallback, useState } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Item } from "../Item/Item";
import { SearchComponent } from "../Search/Search";
import { ButtonGroupComponent } from "../ButtonGroup/ButtonGroup";
import { getItemsList } from "../../selectors/itemsEntitiesSelectors";
import {
  removeItemAction,
  updateItemAction,
  loadItemsListAction,
} from "../../actions/itemsEntitiesActions";
import "./listItem.css";

const ListItem = ({
  itemsList,
  removeItemAction,
  updateItemAction,
  loadItemsListAction,
}) => {
  const [filterValue, setFilterValue] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const filterOptions = [
    {
      value: "",
      text: "All",
    },
    {
      value: false,
      text: "Active",
    },
    {
      value: true,
      text: "Completed",
    },
  ];

  useEffect(() => {
    loadItems();
  }, []);

  const handleItemDelete = useCallback(
    async (item) => {
      removeItemAction(item);
    },
    [removeItemAction]
  );

  const HandleItemUpdate = useCallback(
    async (item) => {
      updateItemAction(item);
    },
    [updateItemAction]
  );

  const handleItemStatusUpdate = async (item) => {
    item.status = !item.status;
    await HandleItemUpdate(item);
  };

  const loadItems = useCallback(async () => {
    loadItemsListAction();
  }, [loadItemsListAction]);

  const handleFilterChange = useCallback((filter) => {
    setFilterValue(filter);
  }, []);

  const onSearchChange = useCallback((value) => {
    setSearchInput(value);
  }, []);

  return (
    <div>
      <SearchComponent placeholder={"Search Items"} onChange={onSearchChange} />
      <ul className="list">
        {itemsList
          .filter(
            (element) =>
              (element.itemName.includes(searchInput) || searchInput === "") &&
              (element.status === filterValue || filterValue === "")
          )
          .map((item, index) => {
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
      <ButtonGroupComponent
        onSelect={(value) => handleFilterChange(value)}
        options={filterOptions}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemsList = getItemsList(state);

  return { itemsList };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      removeItemAction,
      updateItemAction,
      loadItemsListAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
