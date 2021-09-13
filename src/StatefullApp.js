import React from "react";
import ReactDOM  from "react";

class Example extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            info : "this is a statefull component"
        };
    }
    render(){
        return ( 
        <div>
            <h2>{this.props.msg}</h2>
            <h2>{this.state.info}</h2>
        </div>
        );
    }
}

//let message="this is a message";
class Statefull extends React.Component{

    render(){
        return <h2> <Example msg="this is a direct message" /></h2>
    }
}

export default Statefull;