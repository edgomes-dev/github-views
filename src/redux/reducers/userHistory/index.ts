import * as types from "../../types";

const user = {
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

const initialState: types.IUserHistoryState = {
  users: [],
};

export const userHistoryReducer = (
  state = initialState,
  action: types.UserHistoryActions
): types.IUserHistoryState => {
  switch (action.type) {
    case types.USER_HISTORY:
      const oldState = state.users;
      const curretState = action.payload.users;
      const newState: types.IUser[] = oldState.concat(curretState);

      return {
        ...state,
        users: newState,
      };
    default:
      return state;
  }
};
