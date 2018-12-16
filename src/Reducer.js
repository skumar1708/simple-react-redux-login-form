import * as ac from "./Actions";

const Reducer = (state = {}, action) => {
  console.log("action.payload", action.payload);
  switch (action.type) {
    case "SAVE_INFO":
      return action.payload;
    default:
      return state;
  }
};

export default Reducer;
