import React from 'react';
import ListCreate from './ListCreate';
import TodoList from './TodoList';

class App extends React.Component {
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
    return (
      <div className="container">
        <ListCreate handleTextChange={this.handleTextChange}
                    value={this.state.text}
                    handleAddItem={this.handleAddItem}
                    disabled={!this.state.text}
                    itemsLength={this.state.items.length + 1}
        />
        <TodoList items={this.state.items}
                  onDeleteItem={this.handleDeleteItem} />
      </div>
    );
  }
}

export default App;
