import React, { Component } from 'react';

import Header from './components/Header/Header';
import InputFrom from './components/Input/Input';
import Body from './components/Body/Body';

import './App.css'

class App extends Component {

  state = {
    todoList: []
  }

  onAddTodo = (newTodo) => {
    this.setState({ todoList: [...this.state.todoList, newTodo ]})
  }

  onDeleteTodo = (deletedTodoId) => {
    const newTodo = this.state.todoList.filter(toDo => toDo.id !== deletedTodoId)
    this.setState({ todoList: newTodo })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <InputFrom addToDo={this.onAddTodo}/>
        <Body toDo={this.state.todoList} deleteTodo={this.onDeleteTodo}/>
      </div>
    );
  }
}


export default App;