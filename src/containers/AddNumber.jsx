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

// import React, { Component } from "react";
// import store from "../store";

// // eslint-disable-next-line
// export default class extends Component {
//   render() {
//     return (
//       <AddNumber
//         onClick={function (size) {
//           store.dispatch({ type: "INCREMENT", size: size });
//         }}
//       />
//     );
//   }
// }
