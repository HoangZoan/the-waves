import { combineReducers } from "redux";
import users from "./users.reducer";
import products from "./products.reducer";

const appReducer = combineReducers({
  users,
  products,
});

export default appReducer;
