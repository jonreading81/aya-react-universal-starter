import React from 'react';
import styles from './styles.scss';

const Toggle = ({ onToggle, text, className = '' }) => (
  <button type="button" className={`${styles.toggle} ${className}`} onClick={() => onToggle()}>{text}</button>
);

export default Toggle;
