import { createAction } from 'redux-actions';

export const GET_NOTES_REQUEST = createAction('get_notes_request');
export const GET_NOTES_SUCCESS = createAction('get_notes_success');
export const GET_NOTES_FAILURE = createAction('get_notes_failure');

const deleteNote = createAction('delete_note');
const addNote = createAction('add_note');