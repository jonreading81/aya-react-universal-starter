import React from 'react';
import { hot } from 'react-hot-loader';
import ExampleBox from './components/presentation/ExampleBox/ExampleBox';
import 'normalize.css';
import './scss/main.scss';

const App = () => (
  <div>
    <h1>Hello I am amye!  </h1>
    <ExampleBox />
  </div>
);

export default hot(module)(App);
