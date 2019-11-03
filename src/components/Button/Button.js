import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Button extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {};

  render() {
    const { onClick, children } = this.props;

    return (
      <button
        onClick={onClick}
        type="button"
      >
        {children}
      </button>
    );
  }
}

export { Button };
