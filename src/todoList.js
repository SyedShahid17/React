import React from "react";
import './todo.css' ;

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function TodoList(props) {
    const todo = props.todo;
    const list = todo.map((item) => {
        return (
            <div className="log" key={item.key}>
            <p>{item.text.toUpperCase()}
            <span><FontAwesomeIcon className="icon" icon="trash" 
            onClick ={ () => props.deleteTodo(item.key)}
             /></span>
            </p>
            </div>
        );
    });

    return (
        <div>
            <h4>{list}</h4>
        </div>
    )
    
}

export default TodoList;