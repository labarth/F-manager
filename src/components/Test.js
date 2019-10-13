import React from 'react';
import PropTypes from 'prop-types';

class Example extends React.PureComponent {
  state = {
    items: [],
  }

  componentDidMount() {
   this.getData();
  }

  getData = async () => {
    const response = await fetch('api/items');
    const data = await response.json();
    this.setState({ items: data });
  }

  render() {
    return (
      <ul>
        {this.state.items.map((item) => (
          <li key={item.title}>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    )
  }
}

export { Example };
