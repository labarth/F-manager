import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ListItem } from './ListItem';

class List extends PureComponent {
  static propTypes = {
    list: PropTypes.array.isRequired,
  };

  render() {
    return (
      <ul>
        {this.props.list.map((item) => (
          <ListItem price={item.price} description={item.description} />
        ))}
      </ul>
    );
  }
}

export { List };
