import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import TodoItem from './TodoItem';
import styles from './styles/styles';

const TodoList = ({ onDeleteItem, items, classes }) => (
  <ul className={classes.todoList}>
    {items.map(item => (
      <TodoItem key={item.id}
                itemId={item.id}
                itemText={item.text}
                completed={item.done}
                onDeleteItem={onDeleteItem} />
    ))}
  </ul>
);

TodoList.propTypes = {
  onDeleteItem: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
};
export default injectSheet(styles)(TodoList);
