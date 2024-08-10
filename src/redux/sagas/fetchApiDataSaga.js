import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
} from "../reducers/fetchApiReducerSlice";
import axiosInstance from "../../axiosInstance";

// Saga function to fetch data from an API
function* fetchDataSaga() {
  try {
    const response = yield call(axiosInstance.get, "/data-endpoint");
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

// Watcher saga to monitor the fetchDataRequest action
function* watchFetchData() {
  yield takeEvery(fetchDataRequest.type, fetchDataSaga);
}

export default watchFetchData;
