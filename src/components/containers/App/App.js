import React from 'react';
import { hot } from 'react-hot-loader';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { NavBar, NavToggle } from '../../presentation';
import { toggleNavigation } from '../../../redux/modules/navigation/actions';
import '../../../scss/main.scss';

const items = [
  { title: 'Home', url: '/' },
  { title: 'Articles', url: '/articles' },
  { title: 'Article', url: '/article/2' },
];

const App = (props) => {
  const {
    route,
    location,
    toggleNavigation,
    navigationIsOpen,
  } = props;

  return (
    <div>
      <h1>Hello I am Amys Aya!  </h1>
      <NavToggle
        text="toggle"
        onToggle={toggleNavigation}
        isOpen={navigationIsOpen}
      />
      <NavBar
        items={items}
        url={location.pathname}
        isOpen={navigationIsOpen}
      />
      {renderRoutes(route.routes)}
    </div>
  );
};

const mapStateToProps = ({ navigation }) => (
  {
    navigationIsOpen: navigation.isOpen,
  }
);

export default compose(
  connect(mapStateToProps, { toggleNavigation }),
  hot(module),
)(App);
