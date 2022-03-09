import React from 'react';

//components
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

//Css
import './App.css';
import './css/Todo.css';

const isNotCheckedAll = (todos = []) => todos.find(todo => !todo.isCompleted)
class App extends React.PureComponent {
  state = {
    todosList: [{
      id: 1,
      text: 'todo 1',
      isCompleted: false
    }, {
      id: 2,
      text: 'todo 2',
      isCompleted: false
    }],
    todoEditingId: '',
    isCheckedAll: false
  }

  componentWillMount() {
    this.setState({
      isCheckedAll: !isNotCheckedAll(this.state.todosList)
    })
  }
addTodo = (todo = {}) => {
  //console.log('todo', todo )
  this.setState(preState => ({
    todosList: [...preState.todosList, todo]
  }))
} 

  getTodoEditingId = (id = '') => {
    this.setState({ todoEditingId: id })
  }

onEditTodo = (todo ={}, index = -1) => {
  if(index >= 0) {
    const { todosList: list} = this.state
    list.splice(index, 1, todo)
    this.setState({ 
      todoList: list,
      todoEditingId: ''
    })
    
  }
}

markCompleted = (id = '') => {
  const { todosList } = this.state
  const updatedList = todosList.map(todo => todo.id === id ? ({ ...todo, isCompleted: !todo.isCompleted}) : todo)
  this.setState(preState => ({
    todosList: updatedList,
    isCheckedAll: !isNotCheckedAll(updatedList)
  }))
}
  render() {

    const { todosList, todoEditingId, isCheckedAll } = this.state
    return ( 
      <div className = "todoapp" >
        <Header 
          addTodo= {this.addTodo}
          isCheckedAll = {isCheckedAll}
        />
        <TodoList 
          todosList={ todosList }
          getTodoEditingId={this.getTodoEditingId}
          todoEditingId={todoEditingId}
          onEditTodo = {this.onEditTodo}
          markCompleted={this.markCompleted}
          isCheckedAll = {isCheckedAll}
          />
        <Footer/>
      </div>
  );
  }
    
}

export default App;