import { connect } from "react-redux";

import DisplayNumber from "../components/DisplayNumber";

function mapStateToProps(state) {
  return {
    number: state.user.number,
  };
}

export default connect(mapStateToProps)(DisplayNumber);
