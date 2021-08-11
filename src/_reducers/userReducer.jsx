import { INCREMENT } from "../_actions/types";

export default (state, action) => {
  if (state === undefined) return { number: 0 };

  switch (action.type) {
    case INCREMENT:
      return { ...state, number: state.number + action.size };
    default:
      return state;
  }
};
