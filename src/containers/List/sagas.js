import { List } from 'immutable';
import { put, call, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import { getNotes, addNotePatch } from './service';

export function* getNotesSaga() {
  try {
    const notes = yield call(getNotes);
    yield put(actions.GET_NOTES_SUCCESS({ notes: List(notes) }));
  } catch (error) {
    yield put(actions.GET_NOTES_FAILURE({ error: 'service not available' }));
  }
}

export function* addNoteSaga({ payload }) {
  try {
    yield call(addNotePatch, { payload });
    yield put(actions.ADD_NOTE_SUCCESS({ note: payload }));
  } catch (e) {
    yield put(actions.ADD_NOTE_FAILURE({ error: 'add note failure' }));
  }
}

export function* watchNotes() {
  yield takeEvery(actions.GET_NOTES_REQUEST, getNotesSaga);
  yield takeEvery(actions.ADD_NOTE_REQUEST, addNoteSaga);
}
