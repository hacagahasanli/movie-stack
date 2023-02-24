import { all } from "redux-saga/effects";
import { moviesSaga } from "./movie-saga";

export default function* rootSaga() {
  yield all([...moviesSaga]);
}
