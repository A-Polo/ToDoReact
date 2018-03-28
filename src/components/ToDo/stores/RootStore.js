import ToDoStore from './ToDoStore';

class RootStore {
  constructor(context) {
    this.toDoStore = new ToDoStore(context);
  }
}

export default RootStore;
