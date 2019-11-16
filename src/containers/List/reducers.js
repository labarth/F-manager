import { handleActions } from 'redux-actions';
import * as actions from './actions';
import { ListModel } from './model';

export default handleActions({
  [actions.GET_NOTES_REQUEST]: (state) => state.setLoading(),
  [actions.GET_NOTES_SUCCESS]: (state, { payload }) => state.setNotes(payload.notes),
  [actions.GET_NOTES_FAILURE]: (state, { payload }) => state.setError(payload.error),
  [actions.ADD_NOTE_REQUEST]: (state) => state.setLoading(),
  [actions.ADD_NOTE_SUCCESS]: (state, { payload }) => state.addNote(payload.note),
  [actions.ADD_NOTE_FAILURE]: (state, { payload }) => state.setError(payload.error),
}, new ListModel());
