import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ test: state.test });

class App extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <div>{this.props.test}</div>
    );
  }
}

const AppConnected = connect(mapStateToProps)(App);
export { AppConnected as App };
