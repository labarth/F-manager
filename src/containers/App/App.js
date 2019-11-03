import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form } from 'containers/Form/Form';
import { List } from 'containers/List/List';
import { Row } from 'components/Layout/Row';
import { StyledApp } from './Styled';

const mapStateToProps = (state) => ({ list: state.list });

@connect(mapStateToProps, null)
export class App extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const { list } = this.props;

    return (
      <StyledApp>
        <Row>
          <Form />
        </Row>
        <Row>
          {list ? <List list={list} /> : <div>Записей нету</div>}
        </Row>
      </StyledApp>
    );
  }
}
