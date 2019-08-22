import React, { Component } from 'react';
import { GoCheck } from 'react-icons/go';

class TodoButtons extends Component {
  render () {
    const { finished } = this.props.todo;
    let finishButton;
    // let reverseButton;
    if (!finished) {
      finishButton = (
        <button id= "but" type="button" className="btn float-right" onClick={this.props.onFinish}>
          <GoCheck />
        </button>
      );
      // reverseButton = (
      //   <button id= "but" type="button" className="btn float-right" onClick={this.props.onReverse}>
      //     Spat
      //   </button>
      // )
    }

    return (
      <>
      {/* // <button type="button" class="close" aria-label="Close" onClick={this.props.onRemove}>
      // <span aria-hidden="true">&times;</span>
      // </button> */}
      {finishButton}
      {/* {reverseButton} */}
      </>
    )
  }
}

export default TodoButtons;
