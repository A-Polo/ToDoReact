import React from 'react';
import PropTypes from 'prop-types';
import ListCreate from './ListCreate';
import TodoList from './TodoList';
import injectSheet from 'react-jss';
import styles from './styles/styles';

class ToDo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items:[],
      text: ''
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  handleTextChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleAddItem(event) {
    event.preventDefault();

    let newItem = {
      id: Date.now(),
      text: this.state.text,
      done: false
    };

    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }

  handleDeleteItem(itemId) {
    let updatedItems = this.state.items.filter(item => {
      return item.id !== itemId;
    });

    this.setState({items: [].concat(updatedItems)});
  }

  render() {
    const classes  = this.props.classes;

    return (
      <div>
        <div className={classes.container}>
          <div className={classes.content}>
            <ListCreate handleTextChange={this.handleTextChange}
                        value={this.state.text}
                        handleAddItem={this.handleAddItem}
                        disabled={!this.state.text}
                        itemsLength={this.state.items.length + 1}
            />
            <TodoList items={this.state.items}
                      onDeleteItem={this.handleDeleteItem} />
          </div>
        </div>
      </div>
    );
  }
}

ToDo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(ToDo);
