import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavBar, NavToggle } from '../../src/components/presentation';

const items = [
  { title: 'Title 1', url: 'url-1' },
  { title: 'Title 2', url: 'url-2' },
];

storiesOf('Toggle', module)
  .add('Default', () => (
    <NavToggle />
  )).add('With text', () => (
    <NavToggle text="toggle" />
  ));

storiesOf('NavBar', module)
  .add('Default', () => (
    <Router><NavBar items={items} /></Router>
  ))
  .add('Active', () => (
    <Router><NavBar items={items} url="url-1" /></Router>
  ))
  .add('isOpen', () => (
    <Router><NavBar items={items} isOpen /></Router>
  ));
