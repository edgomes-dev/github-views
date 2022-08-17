import { createSelector } from "reselect";

import { RootState } from "../reducers";

const getUserHistory = (state: RootState) => state.userHistory.users;

export const getUserHistorySelector = createSelector(
  getUserHistory,
  (users) => users
);
