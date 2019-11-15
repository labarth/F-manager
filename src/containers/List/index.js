import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { List as ListComponent } from './components/List';

const mapStateToProps = (state) => ({
  notesList: state.notesList.list,
});

@connect(mapStateToProps)
class NotesList extends PureComponent {
  static propTypes = {
    notesList: PropTypes.instanceOf(List).isRequired,
  };

  render() {
    return (
      <ListComponent list={this.props.notesList.toJS()} />
    );
  }
}

export { NotesList };
