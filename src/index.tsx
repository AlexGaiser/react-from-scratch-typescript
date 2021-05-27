import ReactDOM from 'react-dom';
import React from 'react';
// import { hot } from 'react-hot-loader';

const App = (): JSX.Element => {
  return <h1>This is my React app! And I have added things</h1>;
};

// const App = hot(module)(app);

ReactDOM.render(<App />, document.getElementById('app'));
