import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ListControls from "./ListControls";
import { getItemsList } from "../../selectors/itemsEntitiesSelectors";
import { addItemAction } from "../../actions/itemsEntitiesActions";

const mapStateToProps = (state, ownProps) => {
  const itemsList = getItemsList(state);

  return { itemsList };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ addItemAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ListControls);
