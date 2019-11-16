import { createAction } from 'redux-actions';

export const GET_NOTES_REQUEST = createAction('get_notes_request');
export const GET_NOTES_SUCCESS = createAction('get_notes_success');
export const GET_NOTES_FAILURE = createAction('get_notes_failure');

export const ADD_NOTE_REQUEST = createAction('add_notes_request');
export const ADD_NOTE_SUCCESS = createAction('add_notes_success');
export const ADD_NOTE_FAILURE = createAction('add_notes_failure');
