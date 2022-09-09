import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import loading from "./loading";
import post, { postSaga } from "./post";
import posts, { postsSaga } from "./posts";

const rootReducer = combineReducers({
  loading,
  post,
  posts,
});

export function* rootSaga() {
  yield all([postSaga(), postsSaga()]);
}

export default rootReducer;
