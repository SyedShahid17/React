import ReactDOM from 'react-dom';
import React from 'react';

const print = (x) => console.log(x);

class User{
  constructor(name='ananymous',age) {
    this.name = name;
    this.age = age;
  }

  getGreetings(){
    return `Hello , ${this.name}`;
  }

  getInfo(){
    return `My name is ${this.name} and my age is ${this.age}`;
  }
}

class Employee extends User{
  constructor(name,age,ssn){
    super(name,age)
    this.ssn=ssn;
  } 

  getEmpInfo(){
    return super.getInfo() + ` and my ssn is ${this.ssn}`;
  } 

  getInfo(){
    return "Hi";
  }
}

// let usr1 = new User("Syed",21);

// print(usr1.getGreetings());

// let user2 = new User("Syed",22);
// print(user2.name);
// user2.name = "shahid";
// print(user2.getInfo());

const emp1 = new Employee("John",21,12345);
print(emp1);
