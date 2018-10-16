import React from 'react';
import styles from './styles.scss';

const Toggle = ({ onToggle, text }) => (
  <button type="button" className={styles.toggle} onClick={() => onToggle()}>{text}</button>
);

export default Toggle;
