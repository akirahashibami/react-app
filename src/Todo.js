import React, { Component } from 'react';
import './Todo.min.css';

class Todo extends Component {

  state = {
    value: '',
    todoList: []
  }

  onChange(e){
    this.setState({value: e.target.value})
  }

  addList(){
    this.setState({
      todoList: this.state.todoList.concat(this.state.value),
      value: ""
    });
  }

  render(){

    let todoListNode = this.state.todoList.map((todo, idx) => {
      return <li key={idx}>{todo}</li>
    });

    console.log(todoListNode);

    return(
      <div className='todo-list-content'>
        <div className='todo-list'>
          <h1>ToDo List</h1>
          <input
            type="text"
            value={this.state.value}
            onChange={(e) => this.onChange(e)}
          />
          <button onClick={()=> this.addList()}>
            追加
          </button>
          <ul>
            {todoListNode}
          </ul>
        </div>
      </div>
    );
  }
}

export default Todo;
