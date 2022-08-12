export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export interface IFetchUserRequestAction {
  type: typeof FETCH_USER_REQUEST;
}

export const FETCH_USER_SUCESS = "FETCH_USER_SUCESS";
export interface IFetchUserSucessAction {
  type: typeof FETCH_USER_SUCESS;
  payload: IFetchUserSucessPayload;
}
export interface IFetchUserSucessPayload {
  user: IUser;
}

export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export interface IFetchUserFailureAction {
  type: typeof FETCH_USER_FAILURE;
  payload: IFetchUserFailurePayload;
}
export interface IFetchUserFailurePayload {
  error: string;
}

export interface IUser {
  login: String;
  avatar_url: String;
  name: String;
  blog: String;
  location: String;
  bio: String;
  repos_url: String;
  created_at: String;
  updated_at: String;
}

export interface IUserState {
  pending: boolean;
  user: IUser;
  error: string | null;
}

export type UserActions =
  | IFetchUserRequestAction
  | IFetchUserSucessAction
  | IFetchUserFailureAction;
