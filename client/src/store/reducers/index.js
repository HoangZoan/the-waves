import { combineReducers } from "redux";
import users from "./users.reducer";
import products from "./products.reducer";
import notifications from "./notification.reducer";

const appReducer = combineReducers({
  users,
  products,
  notifications,
});

export default appReducer;
