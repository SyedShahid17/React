import ReactDOM from 'react-dom';
import React from 'react';

const print = (x) => console.log(x);

let count = 0;

const add = () => {
  print(`add 1 to ${count}`);
  count += 1;
  print(count);
  renderApp();
}

const minus = () => {
  print(`minus 1 from ${count}`);
  count -= 1;
  print(count);
  renderApp();
}
let container = document.getElementById("root11");

const renderApp = () => {
  let counting = (
    <div>
      <h1>Count : {count}</h1> 
      <button onClick = {add} className="count-class"> plus one(+1)</button> <br />
      <button onClick = {minus} className="count-class"> minus one(-1)</button>
    </div>
  );
  ReactDOM.render( counting, container); 
}