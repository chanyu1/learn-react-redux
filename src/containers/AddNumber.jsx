// import React, { Component } from "react";
import { connect } from "react-redux";
import AddNumber from "../components/AddNumber";
// import store from "../store";

function mapReduxDispatchToReactProps(dispatch) {
  return {
    onClick: function (size) {
      dispatch({ type: "INCREMENT", size: size });
    },
  };
}

export default connect(null, mapReduxDispatchToReactProps)(AddNumber);

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
