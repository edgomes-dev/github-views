import * as types from "../../types";

export const userHistory = (
  payload: types.IUserHistoryPayload
): types.IUserHistoryAction => ({
  type: types.USER_HISTORY,
  payload,
});
