import './App.css';
import React from 'react';
import TodoList from './todoList';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


class App extends React.Component{ 
  constructor(props){
    super(props);

    this.state={
      todo : [],
      currentTodo : { text : '', key : ''} 
    };
    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleChange(event){
    this.setState({currentTodo : {text : event.target.value , key : Math.floor(Math.random()*100)}});
  }

  addItem(event){ 
    event.preventDefault();
    const item = this.state.currentTodo;
    console.log(item);

    if(item.text !== ""){
      const newtodo = [...this.state.todo, item];

      this.setState({todo : newtodo, currentTodo : {text : '',key : ''}});
    }
  }

deleteTodo(key){
  const filter=this.state.todo.filter((item) => item.key !==key);
  this.setState({
    todo : filter
  });
}

reset(){
  //this.state.todo.length=0;
  //console.log(this.state.todo.length);
  this.setState({
    todo : []
  })
}

  render(){


    return (
      <div className="app">
        <header> 
        <h1 id="title">To-do-App by Syed</h1>
        <form id="to-do" onSubmit={this.addItem}>
        <input type="text" placeholder="Enter the text" value={this.state.currentTodo.text} onChange={this.handleChange}/>
        <button type="submit" > Add</button>
        <button id="reset" type="reset" onClick={this.reset}>Reset</button>
        </form> 
        </header>

        <TodoList todo={this.state.todo} deleteTodo={this.deleteTodo}/>

      </div>
    );
  }
}

export default App ;
