import React from 'react';

//components
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

//Css
import './App.css';
import './css/Todo.css';

class App extends React.PureComponent {
  state = {
    todosList: [{
      id: 1,
      text: 'todo 1',
      isCompleted: true
    }, {
      id: 2,
      text: 'todo 2',
      isCompleted: false
    }],
    todoEditingId: ''
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
  render() {

    const { todosList, todoEditingId } = this.state
    return ( 
      <div className = "todoapp" >
        <Header addTodo= {this.addTodo} />
        <TodoList 
          todosList={ todosList }
          getTodoEditingId={this.getTodoEditingId}
          todoEditingId={todoEditingId}
          />
        <Footer/>
      </div>
  );
  }
    
}

export default App;