import React, { Component } from 'react';

class InputTodo extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { title } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          className="input-text"
          type="text"
          placeholder="Add todo..."
          value={title}
          onChange={this.onChange}
        />
        <button className="input-submit" type="submit">Submit</button>
      </form>
    );
  }
}

export default InputTodo;
