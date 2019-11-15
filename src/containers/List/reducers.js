import { handleActions } from 'redux-actions';
import * as actions from './actions';
import { ListModel } from './model';

export default handleActions({
  [actions.GET_NOTES_REQUEST]: (state) => state.setLoading(),
  [actions.GET_NOTES_SUCCESS]: (state, { payload }) => state.setNotes(payload.notes),
  [actions.GET_NOTES_FAILURE]: (state, { error }) => state.setError(error),
}, new ListModel());
