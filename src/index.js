import React from 'react';
import ReactDOM from 'react-dom';

const Component = () => <div>Hello World</div>;
const rootEl = document.getElementById('root');

ReactDOM.render(<Component />, rootEl);