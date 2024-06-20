import React,{Component} from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";


class TodoList extends Component{
    constructor(){
        super();
        this.state ={
            Todos:[]
        };
        this.createTodos = this.createTodos.bind(this);
    }

    createTodos(todo){
        this.setState(
            {Todos: [...this.state.Todos,todo]}
        )
    }
render(){
    let todoItems = this.state.Todos.map(todo => 
        <li><Todo task={todo.task} id={todo.id}/></li>)
    return(
        <div>
            <NewTodoForm todoslst ={this.createTodos}/>
            <ul>
            {todoItems}
            </ul>
            
        </div>
    )
}
}

export default TodoList;