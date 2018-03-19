import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ onDeleteItem, items }) => (
  <ul className="todolist">
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
  items: PropTypes.array.isRequired
};

export default TodoList;
