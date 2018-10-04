import React from 'react';
import ReactDOM from 'react-dom';
import ExampleBox from './components/presentation/ExampleBox/ExampleBox';
import 'normalize.css';
import './scss/main.scss';

const App = () => (
  <div>
    <h1>Hello I am AYA!</h1>
    <ExampleBox />
  </div>
);

ReactDOM.render(<App />, document.getElementById('index'));
