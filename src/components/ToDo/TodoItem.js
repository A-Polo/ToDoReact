import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.onDeleteItem = this.onDeleteItem.bind(this);
  }

  onDeleteItem(event) {
    this.props.onDeleteItem(this.props.itemId);
  }

  render() {
    return (
      <li>
        {this.props.itemText}
        <button type="button" className="btn btn-danger btn-sm" onClick={this.onDeleteItem}>x</button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  onDeleteItem: PropTypes.func.isRequired,
  itemText: PropTypes.string.isRequired,
  itemId: PropTypes.number.isRequired
};

export default TodoItem;
