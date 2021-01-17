// import React, { Component } from "react";
import { connect } from "react-redux";
import DisplayNumber from "../components/DisplayNumber";
// import store from "../store";

function mapReduxStateToReactProps(state) {
  return {
    number: state.number,
  };
}

export default connect(mapReduxStateToReactProps)(DisplayNumber);

// // eslint-disable-next-line
// export default class extends Component {
//   state = { number: store.getState().number };
//   constructor(props) {
//     super(props);
//     store.subscribe(
//       function () {
//         console.log("subscribe");
//         this.setState({ number: store.getState().number });
//       }.bind(this)
//     );
//   }
//   render() {
//     return <DisplayNumber number={this.state.number} unit={this.props.unit} />;
//   }
// }
