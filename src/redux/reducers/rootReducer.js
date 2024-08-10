import { combineReducers } from "redux";
import fetchDataReducer from "./fetchApiReducerSlice";
import counterReducer from "./counterSlice";
import skillReducer from "./skillsReducerSlice";

const rootReducer = combineReducers({
  fetchData: fetchDataReducer,
  counter:   counterReducer,
  skills: skillReducer,
});

export default rootReducer;
