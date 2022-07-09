import React, { useEffect, useCallback, useState } from "react";
import { ListItem } from "../ListItem/ListItem";
import { LoaderComponent } from "../Loader/Loader";
import { SearchComponent } from "../Search/Search";
import { ButtonGroupComponent } from "../ButtonGroup/ButtonGroup";
import "./listContainer.css";

const ListContainer = ({
  itemsList,
  removeItemAction,
  updateItemAction,
  loadItemsListAction,
}) => {
  const [filterValue, setFilterValue] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    loadItems();
    setIsLoading(false);
  }, []);

  const handleItemDelete = useCallback(
    async (item) => {
      removeItemAction(item);
    },
    [removeItemAction]
  );

  const handleItemUpdate = useCallback(
    async (item) => {
      updateItemAction(item);
    },
    [updateItemAction]
  );

  const handleItemStatusUpdate = async (item) => {
    item.status = !item.status;
    await handleItemUpdate(item);
  };

  const loadItems = useCallback(async () => {
    loadItemsListAction();
  }, [loadItemsListAction]);

  const handleFilterChange = useCallback((value) => {
    setIsLoading(true);
    setFilterValue(value);
    setIsLoading(false);
  }, []);

  const onSearchChange = useCallback((value) => {
    setIsLoading(true);
    setSearchInput(value);
    setIsLoading(false);
  }, []);

  return (
    <div>
      <SearchComponent
        placeholder={"Search Items"}
        loading={isLoading}
        onChange={onSearchChange}
      />
      <ul className="list">
        {!isLoading ? (
          itemsList
            .filter(
              (element) =>
                (element.itemName.includes(searchInput) ||
                  searchInput === "") &&
                (element.status === filterValue || filterValue === "")
            )
            .map((item, index) => {
              return (
                <ListItem
                  key={index}
                  item={item}
                  handleItemDelete={() => handleItemDelete(item)}
                  handleItemUpdate={() => handleItemStatusUpdate(item)}
                />
              );
            })
        ) : (
          <LoaderComponent />
        )}
      </ul>
      <ButtonGroupComponent
        onSelect={(value) => handleFilterChange(value)}
        options={filterOptions}
      />
    </div>
  );
};

export default ListContainer;
