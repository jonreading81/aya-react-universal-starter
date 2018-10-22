import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './styles.scss';

const NavBar = (props) => {
  const {
    url,
    isOpen,
    onChange,
    className,
  } = props;
  let { items } = props;
  const seletectedURL = url;
  const classNames = [styles.navBar];
  if (className) {
    classNames.push(className);
  }
  if (isOpen) {
    classNames.push(styles.isOpen);
  }

  items = items.map(({ title, url }) => {
    const className = seletectedURL === url ? styles.isSelected : '';
    return (
      <NavLink
        onClick={() => onChange(url)}
        className={className}
        key={url}
        to={url}
      >
        {title}
      </NavLink>
    );
  });

  return (
    <nav className={classNames.join(' ')}>{items}</nav>
  );
};

NavBar.propTypes = {
  items: PropTypes.array,
  onChange: PropTypes.func,
  isOpen: PropTypes.bool,
};

NavBar.defaultProps = {
  items: [],
  isOpen: false,
  onChange: () => {},
};


export default NavBar;
