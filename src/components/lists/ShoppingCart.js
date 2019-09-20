import React, { Component } from "react";
import CartTable from "./CartTable";


class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
      todos: []
    };
  }

  TaskChangeHandler = e => {
    this.setState({
      task: e.target.value
    });
  };

  addTodo = e => {
    e.preventDefault();
    const { date, task } = this.state;
    const todoItem = {
      date,
      task
    };

    this.setState({
      todos: [...this.state.todos, todoItem],
      task: ""
    });
  };

  deleteTodo = key => {
    const todos = this.state.todos.filter((todo, i) => i !== key);
    this.setState({
      todos
    });
  };

  onDelete(key) {
    this.deleteTodo(key);
}

  render() {
    return (
      <div id="ShoppingCart">
        <h1 className="title">Shopping list</h1>
        <form onSubmit={this.addTodo}>
          <div>
              <input
                type="text"
                className="input"
                onChange={this.TaskChangeHandler}
                value={this.state.task}
                placeholder="Add ..."
              />
              <input className="button" type="submit" value="Add" />
          </div>
        </form>

        <CartTable
        todos={this.state.todos}
        onDelete={this.onDelete.bind(this)}
        />
      </div>
    );
  }
}

export default ShoppingCart;