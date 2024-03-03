import { combineReducers } from "redux";
import countReducer from "./count/count.reducer";
import usersReducer from "./user/user.reducer";
const rootReducer = combineReducers({
  count: countReducer,
  user: usersReducer,
});
export default rootReducer;
