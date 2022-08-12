import * as types from "../../types";

export const fetchUserRequest = (): types.IFetchUserRequestAction => ({
  type: types.FETCH_USER_REQUEST,
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
