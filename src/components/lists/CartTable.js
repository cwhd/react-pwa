import React, { Component } from "react";


class CartTable extends Component {

  deleteHandler(key) {
    this.props.onDelete(key);
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>List</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {this.props.todos.map((item, key) => (
            <tr key={key}>
              <td>{item.task}</td>
              <td>
                <button
                  className="button is-danger"
                  onClick={() => this.deleteHandler(key)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default CartTable;