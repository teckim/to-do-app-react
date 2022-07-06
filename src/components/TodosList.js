import { Component } from 'react';
import TodoItem from './TodoItem';

class TodosList extends Component {
  render() {
    const {
      todos, setUpdate, handleChangeProps, deleteTodoProps,
    } = this.props;

    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            deleteTodoProps={deleteTodoProps}
            setUpdate={setUpdate}
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;
