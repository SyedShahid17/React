import ReactDOM, { render } from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';


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




// class Books extends React.Component{

//   render(){
//     return <h3> The author of the book is {this.props.author}</h3>
//   };
// }


// class Collection extends React.Component{
//   render(){
//     let v="sted";
//     return (
//       <div>
//         <h1>This is the collection of all my books.</h1>
//         <Books author={v} />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Collection />,document.getElementById("root11"));


// class Bike extends React.Component{

//   render(){
//     return <h2>The manufacturer of my bike is {this.props.m} and model of my bike is {this.props.mo}</h2>
//   }
// }

// class Collection extends React.Component{

//   render(){
//     const bikeinfo={
//       maker : "yamaha" ,
//       model : "R1"
//     }
//     return (
//       <div>
//         <h2>This is my bike</h2>
//         <Bike m={bikeinfo.maker} mo={bikeinfo.model} />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Collection />, document.getElementById("root11"));

// class Books extends React.Component{

//   constructor(props){
//     super(props);
//     this.state = {
//       book : "harry potter"
//     };
//   }

//   render(){
//     return ( 
//       <div>
//         <h1>this book is {this.state.book} and the author of this book is {this.props.author} </h1>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Books author="Syed" />, document.getElementById("root11"));


// class Clock extends React.Component{

//   constructor(props) {
//     super(props);
//     this.state={
//       date : new Date()
//     }
    
//   }

//   componentDidMount(){
//     this.timerId = setInterval(
//       () => this.tick() , 1000
//     );
//   }
//   componentWillUnmount(){
//     clearInterval(this.timerId);
//   }

//   tick(){
//     this.setState({date : new Date()});
//   }

//   render(){
//     return (
//       <div>
//         <h1>Hello ! it is {this.state.date.toLocaleTimeString()} </h1>
//       </div>
//     );
//   }
// }

// // function App(){
// //   return (
// //     <div>
// //       <Clock />
// //       <Clock />
// //       <Clock />
// //     </div>
// //   );
// // }

// ReactDOM.render(<Clock />,document.getElementById("root11"));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root11")
);