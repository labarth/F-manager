import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Button extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  render() {
    const { onClick } = this.props;

    return (
      <button onClick={onClick}>{this.props.children}</button>
    );
  }
}

export { Button };
