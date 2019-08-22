import React, { Component } from "react";

import axios from "../axios";

import TodoButtons from "./TodoButtons";
import XButton from "./XButton";

import moment from 'moment';

class Todo extends Component {
  renderText = () => {
    const { text } = this.props.todo;
    if (!text) return null;

    return (
      <div className="card-text" dangerouslySetInnerHTML={{ __html: text }} />
    );
  };

  handleFinish = async () => {
    await axios.patch("/todos/" + this.props.todo.id, {
      finished: true
    });
    this.props.onFinish();
  };

  // handleReverse = async () => {
  //   await axios.patch("/todos/" + this.props.todo.id, {
  //     finished: false
  //   });
  //   this.props.onReverse();
  // };

  handleRemove = async () => {
    await axios.delete("/todos/" + this.props.todo.id);
    this.props.onRemove();
  };

  render() {
    const { createdAt, title, finished } = this.props.todo;
    let classes = "card";
    let formatedCreatedAt = moment(createdAt).format("hh:mm DD. MMMM YYYY");
    let currentTime = moment();
    if (finished) classes += " border-success";
    if (!finished) classes += " border-danger";
    let timeDif = currentTime.diff(createdAt, 'minutes') < 10;

    function Badge () { 
      if (timeDif && !finished) {
      return <span class="badge badge-danger">New</span>;
      }
    }
 
    return (
      <div className="todo mb-2">
        <div className={classes}>
          <div className="card-body">
            <h5 className="card-title">{title} {Badge()} 
            <XButton onRemove={this.handleRemove}
            />
            </h5>
            <h6 className="card-subtitle text-muted mb-2">
              Created at {formatedCreatedAt}
            </h6>
            {this.renderText()}
            <TodoButtons
              todo={this.props.todo}
              onFinish={this.handleFinish}
              // onReverse={this.handlereverse}
                // onRemove={this.handleRemove}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
