import { connect } from "react-redux";
import DisplayNumber from "../components/DisplayNumber";

function mapStateToProps(state) {
  return {
    number: state.user.number,
  };
}

export default connect(mapStateToProps)(DisplayNumber);

// import React, { Component } from "react";
// import store from "../store";

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
