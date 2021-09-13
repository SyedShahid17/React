import ReactDOM from 'react-dom';
import React from 'react';
import Books from './BookComponent';


const print = (x) => console.log(x);
print("start");


// function component 
// function Celcome(props){
//   return <h1>Hello my name is {props.name} and i'm {props.age} years old.</h1>
// }
// ReactDOM.render(<Celcome name="shahid" age="21"/>,document.getElementById("root11"));



// // class component
// class Welcome extends React.Component{
//   render(){
//     return <h1>Hello {this.props.name} and i'm {this.props.age}</h1>
//   }
// }
// ReactDOM.render(<Welcome name="syed" age='18' />, document.getElementById("root11"));


// class Books extends React.Component{

//   constructor(){
//     super();
//     this.state = {
//       author : "Syed Shahid "
//     }
//   }

//   render(){
//     return <h2>The author is {this.state.author}</h2>
//   }

// }

// ReactDOM.render(<Books />, document.getElementById("root11"));


// //nested component 

// class Books extends React.Component{

//   render(){
//     return <h2>my book</h2>
//   }

// }

// class Book1 extends React.Component{

//   render(){
//     return (
//       <div>
//         <h1>This book is book1</h1>
//         <Books />
//       </div>
//     );
//   }

// }

// ReactDOM.render(<Book1 />, document.getElementById("root11"));

// components inside the files

ReactDOM.render(<Books />,document.getElementById("root11"));
