import React from 'react';
import PropTypes from 'prop-types';

const ListCreate = ({handleTextChange, handleAddItem, value}) => (
  <div>
    <input type="text" placeholder="Enter to do" onChange={handleTextChange} value={value}/>
    <button onClick={handleAddItem}>Add To Do</button>
  </div>
);

ListCreate.propTypes = {
  handleTextChange: PropTypes.func.isRequired,
  handleAddItem: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default ListCreate;


