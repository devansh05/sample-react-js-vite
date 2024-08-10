import { put, takeEvery, delay } from 'redux-saga/effects';
import { increment, incrementByAmount } from '../reducers/counterSlice';

function* incrementAsync() {
  yield delay(1000);
  yield put(increment());
}

function* watchIncrementAsync() {
  yield takeEvery(incrementByAmount, incrementAsync);
}

export default function* counterSaga() {
  yield watchIncrementAsync();
}