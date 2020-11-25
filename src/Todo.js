import React, { Component } from 'react';
import './Todo.min.css';

import AddTodo from './component/Todo/AddTodo';
import TodoElement from './component/Todo/TodoElement';

class Todo extends Component {

  state = {
    value: '',
    todoList: []
  }

  onChange(key_value){
    this.setState(key_value)
  }

  add(e){
    this.setState({
      todoList: this.state.todoList.concat(e),
      value: ''
    })
  }

  render(){

    const todoListNode = this.state.todoList.map(element => {
      return(
        <TodoElement
          key={element.id}
          content={element.content} />
      )
    })

    return(
      <div className="todo-list-wrapper">
        <h2>ToDo List</h2>
        <AddTodo
          {...this.state}
          onChange={(e) => this.onChange(e)}
          add={(e) => this.add(e)}
        />
        <ul>
          {todoListNode}
        </ul>
      </div>
    );
  }
}

export default Todo;
