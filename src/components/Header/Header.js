import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';

const Header = ({ classes }) => (
  <header className={classes.header}>
    <h2>Header title</h2>
  </header>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Header);
