import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { Test } from 'components/Test';

const Component = () => <div><Test /></div>;
const ComponentWithHot = hot(Component);
const rootEl = document.getElementById('root');

ReactDOM.render(<ComponentWithHot />, rootEl);