import React, { Component } from 'react';
import './Todo.min.css';

class Todo extends Component {

  state = {
    value: '',
    todoList: []
  }

  onChange(e){
    this.setState({
      value: e.target.value
    })
  }

  add(){
    this.setState({
      todoList: this.state.todoList.concat(this.state.value),
      value: ''
    })
  }

  render(){

    const todoListNode = this.state.todoList.map((todo, idx)=>{
      return <li key={idx}>{todo}</li>
    })

    return(
      <div className="todo-list-wrapper">
        <h2>ToDo List</h2>
        <input
          type="text"
          value={this.state.value}
          onChange={(e) => this.onChange(e)}
          />
        <button
          onClick={() => this.add()}
          >追加</button>
        <ul>
          {todoListNode}
        </ul>
      </div>
    );
  }
}

export default Todo;
