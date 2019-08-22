import React, { Component } from "react";
import Masonry from 'react-masonry-component';

import Todo from "../components/Todo";

class TodoList extends Component {
  render() {
    const todos = this.props.todos;
    
    return (
      <Masonry className="todos">
        {todos.map((todoData) => {
          const handleFinishTodo = () => {
            todoData.finished = true;
            this.props.onEdit(todoData);
          };

          const handleRemoveTodo = () => {
            this.props.onRemove(todoData);
          };

          // const handleReverse = () => {
          //   this.props.onReverse(todoData);
          // }

          return (
            <Todo
              todo={todoData}
              key={todoData.id}
              onFinish={handleFinishTodo}
              onRemove={handleRemoveTodo}
              // onReverse={handleReverse}
            />
          );
        })}
      </Masonry>
    );
  }
}

export default TodoList;
