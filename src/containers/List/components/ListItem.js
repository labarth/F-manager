import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ListItem extends PureComponent {
  static propTypes = {
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  static defaultProps = {};

  render() {
    const { price, description } = this.props;

    return (
      <li>
        <div>{price}</div>
        <div>{description}</div>
      </li>
    );
  }
}

export { ListItem };
