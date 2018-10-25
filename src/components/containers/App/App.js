import React from 'react';
import { hot } from 'react-hot-loader';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { NavBar, NavToggle } from '../../presentation';
import { toggleNavigation } from '../../../redux/modules/navigation/actions';
import '../../../scss/main.scss';
import './favicon.ico';
import styles from './styles.scss';

const items = [
  { title: 'Home', url: '/' },
  { title: 'Articles', url: '/articles' },
  { title: 'Article', url: '/article/home' },
];

const App = (props) => {
  const {
    route,
    location,
    toggleNavigation,
    navigationIsOpen,
  } = props;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Aya next generation plant butters</h1>
        <NavToggle
          text="toggle"
          onToggle={toggleNavigation}
          isOpen={navigationIsOpen}
          className={styles.navToggle}
        />
      </header>
      <NavBar
        items={items}
        url={location.pathname}
        isOpen={navigationIsOpen}
        className={styles.nav}
      />
      <main role="main" className={styles.main}>
        {renderRoutes(route.routes)}
      </main>
      <section className={styles.sidebar}>
        <h1>Side bar</h1>
      </section>
      <footer className={styles.footer}>
        <h1>Footer</h1>
      </footer>
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
