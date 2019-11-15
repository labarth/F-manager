import { combineReducers } from 'redux';
import notesList from 'containers/List/reducers';

export const reducer = combineReducers({
  test: (state = 'hello world') => state,
  notesList,
});
