import { takeEvery, put } from 'redux-saga/effects';
import { requestUpdateSkill, updateSkill } from '../reducers/skillsReducerSlice';

// Saga function to handle skill update
function* handleUpdateSkill(action) {
  yield put(updateSkill(action.payload));
}

// Watcher saga
function* watchUpdateSkill() {
  yield takeEvery(requestUpdateSkill.type, handleUpdateSkill);
}

export default watchUpdateSkill;