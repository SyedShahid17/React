import React from "react";
import { ReactDOM } from "react";

class Form extends React.Component{
    constructor(props){
      super(props);
  
      this.state = {
        value : ''
        //email : ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      //this.handleChangeEmail = this.handleChangeEmail(this);
    }
  
    handleChange(event){
      this.setState({value : event.target.value});
    }
    // handleChangeEmail(event){
    //   this.setState({email : event.target.email});
    // }
  
    handleSubmit(event){
      alert(" Name has been submitted as " + this.state.value );
    }
  
     
    render(){
      return (
        <form onSubmit={this.handleSubmit} >
        <label>Name : <input type="text" value = {this.state.value } onChange = {this.handleChange}/></label>
        <label>Email : <input type="text"  /></label>
        <input type="submit" value="submit" />
        </form>
      )
    }
  }
  
  
ReactDOM.render(<Form /> , document.getElementById("root11"));