import { combineReducers } from "redux";
import Reducer from "./Reducer";

export default function createReducers() {
  return combineReducers({
    app: Reducer
  });
}
