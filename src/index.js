import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

const Component = () => <div>Hello World</div>;
const ComponentWithHot = hot(Component);
const rootEl = document.getElementById('root');

ReactDOM.render(<ComponentWithHot />, rootEl);