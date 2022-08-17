import { combineReducers } from "redux";
import { userReducer } from "./user";
import { userHistoryReducer } from "./userHistory";

const rootReducer = combineReducers({
  user: userReducer,
  userHistory: userHistoryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
