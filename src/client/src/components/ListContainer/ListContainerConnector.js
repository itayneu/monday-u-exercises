import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ListContainer from "./ListContainer";
import { getItemsList } from "../../selectors/itemsEntitiesSelectors";
import {
  removeItemAction,
  updateItemAction,
  loadItemsListAction,
} from "../../actions/itemsEntitiesActions";

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

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
