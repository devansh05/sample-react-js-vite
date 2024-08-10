import { all } from "redux-saga/effects";
import fetchDataSaga from "./fetchApiDataSaga";
import counterSaga from "./counterSaga";
import skillSaga from './skillsSaga';

export default function* rootSaga() {
  yield all([skillSaga(), fetchDataSaga(), counterSaga()]);
}
