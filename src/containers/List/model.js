import { Record, List } from 'immutable';

export class ListModel extends Record({
  list: List(),
  loading: false,
  error: null,
}) {
  addNote(note) {
    return this.list.push(note);
  }

  deleteNote(id) {
    return this.list.filter((note) => note.id !== id);
  }

  setNotes(notes) {
    return this.set('list', notes).set('loading', false);
  }

  setLoading() {
    return this.set('loading', true);
  }

  setError(error) {
    return this.set('error', error);
  }
}
