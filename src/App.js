import React from 'react';

//components
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

//Css
import './App.css';
import './css/Todo.css';

function App() {
    return ( 
        <div className = "todoapp" >
          <Header />
          <TodoList/>
          <Footer/>
        </div>
    );
}

export default App;