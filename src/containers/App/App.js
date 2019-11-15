import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GET_NOTES_REQUEST } from 'containers/List/actions';
import { Form } from 'containers/Form/Form';
import { NotesList } from 'containers/List';
import { Row } from 'components/Layout/Row';
import { StyledApp } from './Styled';

const mapStateToProps = (state) => ({ list: state.list });

@connect(mapStateToProps, { getNotesAction: GET_NOTES_REQUEST })
export class App extends PureComponent {
  static propTypes = {
    getNotesAction: PropTypes.func.isRequired,
    list: PropTypes.array,
  };

  static defaultProps = {
    list: [],
  };

  async componentDidMount() {
    this.props.getNotesAction();
  }

  render() {
    const { list } = this.props;

    return (
      <StyledApp>
        <Row>
          <Form />
        </Row>
        <Row>
          {list ? <NotesList list={list} /> : <div>Записей нету</div>}
        </Row>
      </StyledApp>
    );
  }
}
