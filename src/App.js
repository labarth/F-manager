import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ test: state.test });

@connect(mapStateToProps, null)
export class App extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <div>{this.props.test}</div>
    );
  }
}
