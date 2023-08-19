import { put, takeLatest } from "redux-saga/effects";
import { getUser, setUser, setError } from "./usersSlice";
import axios from "axios";

// Generator function
export function* getUserSaga() {
  console.log("getUserSaga run");
  try {
    // You can also export the axios call as a function.
    const response = yield axios.get(`http://localhost:3000/users`);
    yield put(setUser(response.data));
  } catch (error) {
    console.log("error", error);
    yield put(setError());
  }
}

// Generator function
export function* watchUserAll() {
  console.log("watchGetUser run");
  yield takeLatest(getUser.type, getUserSaga);
}
