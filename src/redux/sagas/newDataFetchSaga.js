// src/sagas/dataSaga.js
import { takeEvery, call, put } from "redux-saga/effects";
import axiosInstance from "../../axiosInstance";
import {
  FETCH_DATA_ACTION,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  UPDATE_DATA,
} from "../actions/actionTypes";

// Saga to fetch data from an API
function* fetchDataSaga() {
  try {
    const response = yield call(axiosInstance.get, "/data-endpoint"); // Replace with your API endpoint
    yield put({ type: FETCH_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_DATA_FAILURE, payload: error.message });
  }
}

function* updateDataSaga(action) {
  try {
    // Perform any necessary side effects before updating data
    // For example, you could make an API call to save the updated data

    // Directly update the data in the store
    yield put({ type: FETCH_DATA_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: FETCH_DATA_FAILURE, payload: error.message });
  }
}

function* watchUpdateData() {
  yield takeEvery(UPDATE_DATA, updateDataSaga);
}

function* watchFetchData() {
  yield takeEvery(FETCH_DATA_ACTION, fetchDataSaga);
}

export default function* rootSaga() {
  yield watchFetchData();
  yield watchUpdateData();
}
