import * as types from "../../types";

const user = {
  pending: false,
  error: null,
  login: "",
  avatar_url: "",
  name: "",
  blog: "",
  location: "",
  bio: "",
  repos_url: "",
  created_at: "",
  updated_at: "",
};

const initialState: types.IUserState = {
  pending: false,
  user,
  error: null,
};

export const userReducer = (
  state = initialState,
  action: types.UserActions
) => {
  switch (action.type) {
    case types.FETCH_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case types.FETCH_USER_SUCESS:
      return {
        ...state,
        pending: false,
        user: action.payload.user,
        error: null,
      };
    case types.FETCH_USER_FAILURE:
      return {
        ...state,
        pending: false,
        user: user,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

/*


const initialState: types.IUser = {
  pending: false,
  error: null,
  login: "",
  avatar_url: "",
  name: "",
  blog: "",
  location: "",
  bio: "",
  created_at: "",
  updated_at: "",
};

*/
