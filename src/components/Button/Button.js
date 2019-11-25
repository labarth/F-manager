import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    type: 'button',
    onClick: Function.prototype,
  };

  render() {
    const { onClick, children, type } = this.props;

    return (
      <button
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export { Button };
