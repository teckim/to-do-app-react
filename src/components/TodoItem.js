import { Component } from 'react';
import styles from './TodoItem.module.css';

class TodoItem extends Component {
  constructor() {
    super();
    this.state = {
      editing: false,
    };

    this.handleUpdatedDone = this.handleUpdatedDone.bind(this);
    this.handleEditing = this.handleEditing.bind(this);
  }

  handleUpdatedDone(event) {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  }

  handleEditing() {
    this.setState({
      editing: true,
    });
  }

  render() {
    const {
      todo, handleChangeProps, deleteTodoProps, setUpdate,
    } = this.props;
    const { editing } = this.state;
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    const viewMode = {};
    const editMode = {};

    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={todo.completed}
            onChange={() => handleChangeProps(todo.id)}
          />
          <button
            type="button"
            onClick={() => deleteTodoProps(this.props.todo.id)}
          >
            Delete
          </button>
          <span style={this.props.todo.completed ? completedStyle : null}>
            {todo.title}
          </span>
        </div>
        <input
          type="text"
          className={styles.textInput}
          onChange={(e) => setUpdate(e.target.value, todo.id)}
          onKeyDown={this.handleUpdatedDone}
          style={editMode}
        />
      </li>
    );
  }
}

export default TodoItem;
