import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles/styles';

const ListCreate = ({ handleTextChange, handleAddItem, value, classes }) => (
  <div className={classes.wrap}>
    <input className={classes.input} type="text" placeholder="Enter to do" onChange={handleTextChange} value={value}/>
    <div className={classes.buttonWrap}>
      <button className={classes.button} onClick={handleAddItem}>Add To Do</button>
    </div>
  </div>
);

ListCreate.propTypes = {
  handleTextChange: PropTypes.func.isRequired,
  handleAddItem: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(ListCreate);
