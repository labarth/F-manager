import { combineReducers } from 'redux';

export const reducer = combineReducers({
  test: (state = 'hello world') => state,
});
