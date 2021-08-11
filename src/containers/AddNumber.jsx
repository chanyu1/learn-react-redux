import { connect } from "react-redux";
import { INCREMENT } from "../_actions/types";
import AddNumber from "../components/AddNumber";

function mapDispatchToProps(dispatch) {
  return {
    onClick: function (size) {
      dispatch({ type: INCREMENT, size: size });
    },
  };
}

export default connect(null, mapDispatchToProps)(AddNumber);
