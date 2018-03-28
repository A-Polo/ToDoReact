import React from 'react';
import { Provider } from 'mobx-react';
import RootStore from './stores/RootStore';
import ToDo from './ToDo';

const rootStore = new RootStore();

const ToDoContainer = () => (
  <Provider store={rootStore}>
    <ToDo />
  </Provider>
);

export default ToDoContainer;
