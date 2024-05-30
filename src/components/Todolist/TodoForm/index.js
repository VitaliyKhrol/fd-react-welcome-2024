import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state={
            todo:'',
            list:[]
        }
    }
    
  

    
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input 
                type='text'
                placeholder='You sprava'
                name="todo"
                value = {this.state.todo}
                onChange ={this.changeHandler}/>
                <button>Отправить</button>
            </form>
        );
    }
}

export default TodoForm;
