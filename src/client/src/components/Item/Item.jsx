import React from "react";
import PropTypes from "prop-types";
import { CheckboxComponent } from "../Checkbox/Checkbox";
import { Label } from "../Label/Label";
import { Image } from "../Image/Image";
import delete_icon from "../../images/delete_icon.svg";
import "./item.css";

export const Item = ({ item, handleItemDelete, HandleItemUpdate }) => {
  return (
    <li className="list-item">
      <CheckboxComponent isChecked={item.status} onChange={HandleItemUpdate} />
      <Label
        label={
          item.status === true
            ? `${item.itemName} (Done: ${new Date(
                item.updatedAt
              ).toLocaleString()})`
            : item.itemName
        }
      />
      <Image src={delete_icon} onClick={handleItemDelete} />
    </li>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
  handleItemDelete: PropTypes.func,
  HandleItemUpdate: PropTypes.func,
};

Item.defaultProps = {
  item: {},
  handleItemDelete: undefined,
  HandleItemUpdate: undefined,
};
