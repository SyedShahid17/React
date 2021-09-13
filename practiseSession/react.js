import ReactDOM from 'react-dom';
import React from 'react';

// let text11= <div>
//    <form action="index.html" method="post">
//      <input type="text" name="name" ></input>
//      <input type="submit" ></input>
//    </form>
//  </div>

// let name= "syed";

// let user={
//   "name" : "syed",
//   "age" : "21",
//   "degree" : "Engineering",
//   "location" : "bangalore"
// }

// let text= <div>
//   <h1>Hi from Js</h1>
//   <h1>My name is {user.name.toUpperCase()}</h1>
//   <h2>age : {user.age}</h2>
//   <h2> from {user.location} and degree holder in {user.degree}</h2>
// </div> 

function formatName(user){
  return user.firstname + " " + user.lastname;
}

let user={
  firstname : "Syed",
  lastname : "Shahid"
};

let element = <div>
  <h1>FirstName : {user.firstname}</h1>
  <h1>LastName : {user.lastname}</h1>
  <h1 style={{color : 'red',fontSize : '4vw'}}>{formatName(user)}</h1>
</div>


let text1=document.getElementById("root11");

 ReactDOM.render(
   [element],
   text1
);



// function getLocation(location) {
//   if(location){
//     return user.location;
//   }else{return 'unknown';}
// }

// let user={
//   "name" : "syed",
//   "age" : "21",
//   "degree" : "Engineering",
//   "location" : "bangalore"
// }

// let text= <div>
//   <h1>Hi from Js</h1>
//   <h1>My name is {user.name.toUpperCase()}</h1>
//   <h2>age : {user.age}</h2>
//   <h2> from {getLocation(user.location)} and degree holder in {user.degree}</h2>
// </div>

// ReactDOM.render(
//   text,document.getElementById("root11")
// );


