import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchUserFailure, fetchUserSucess, userHistory } from "../actions";
import * as types from "../types";

interface IUserFetchResponse {
  user: string;
}

const getUser = async (user: string): Promise<IUserFetchResponse> => {
  return await axios.get(`https://api.github.com/users/${user}`);
};

function* fetchUserSaga({ user }: types.IFetchUserRequestAction): any {
  try {
    const response = yield call(getUser, user);
    yield put(
      fetchUserSucess({
        user: response.data,
      })
    );
    yield put(userHistory({ users: [response.data] }));
  } catch (err) {
    if (err instanceof Error) {
      yield put(
        fetchUserFailure({
          error: err.message,
        })
      );
    } else {
      console.log(err);
    }
  }
}

function* userSaga() {
  yield all([takeLatest(types.FETCH_USER_REQUEST, fetchUserSaga)]);
}

export default userSaga;
