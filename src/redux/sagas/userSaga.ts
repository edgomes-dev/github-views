import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchUserFailure, fetchUserSucess } from "../actions";
import * as types from "../types";

const getUser = () =>
  axios.get<types.IUser>("https://api.github.com/users/edgomes-dev");

function* fetchUserSaga(): any {
  try {
    const response = yield call(getUser);
    yield put(
      fetchUserSucess({
        user: response.data,
      })
    );
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
