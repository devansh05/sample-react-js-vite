import { all } from "redux-saga/effects";
import fetchDataSaga from "./fetchApiDataSaga";
import counterSaga from "./counterSaga";
import skillSaga from './skillsSaga';
import newDataFetchSaga from './newDataFetchSaga';

export default function* rootSaga() {
  yield all([newDataFetchSaga(), skillSaga(), fetchDataSaga(), counterSaga()]);
}
