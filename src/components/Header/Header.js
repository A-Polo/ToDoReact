import React from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

const Header = ({ classes }) => (
  <header className={classes.header}>
    <h2>Header title</h2>
  </header>
);

export default injectSheet(styles)(Header);
