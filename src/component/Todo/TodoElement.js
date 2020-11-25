import React, { Component } from 'react';

class TodoElement extends Component {

  render(){
    return(
      <li>
        {this.props.content}
      </li>
    );
  }
}

export default TodoElement;
