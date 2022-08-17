import * as types from "../../types";

export const fetchUserRequest = (
  user: string
): types.IFetchUserRequestAction => ({
  type: types.FETCH_USER_REQUEST,
  user,
});

export const fetchUserSucess = (
  payload: types.IFetchUserSucessPayload
): types.IFetchUserSucessAction => ({
  type: types.FETCH_USER_SUCESS,
  payload,
});

export const fetchUserFailure = (
  payload: types.IFetchUserFailurePayload
): types.IFetchUserFailureAction => ({
  type: types.FETCH_USER_FAILURE,
  payload,
});
