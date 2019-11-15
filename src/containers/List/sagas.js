import { List } from 'immutable';
import { put, call, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import { getNotes } from './service';

export function* getNotesSaga() {
  try {
    const notes = yield call(getNotes);
    yield put(actions.GET_NOTES_SUCCESS({ notes: List(notes) }));
  } catch (error) {
    yield put(actions.GET_NOTES_FAILURE(error));
  }
}

export function* watchGetNotes() {
  yield takeEvery(actions.GET_NOTES_REQUEST, getNotesSaga);
}
