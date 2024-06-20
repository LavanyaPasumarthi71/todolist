import React,{Component} from "react";
import uuid from 'uuid';

class NewTodoForm extends Component{
    constructor(props){
        super(props);
        this.state ={
            todo:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
this.setState({
    [evt.target.name] : evt.target.value
})
    }

    handleSubmit(evt){
        evt.preventDefault();
        
        this.props.todoslst({...this.state.todo});
        this.setState(
            {
                todo:''
            }
        );
    }
render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="todo" value={this.state.todo}
                onChange={this.handleChange}
                />
                <button>Save TO-DO</button>
            </form>
        </div>
    )
}
}

export default NewTodoForm;