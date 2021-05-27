import ReactDOM from 'react-dom';
import React from 'react';
import { hot } from 'react-hot-loader';

const app = (): JSX.Element => {
  return (
    <h1>This is my React app! I updated live again and again</h1>
  );
};

const App = hot(module)(app);

ReactDOM.render(<App />, document.getElementById('app'));
