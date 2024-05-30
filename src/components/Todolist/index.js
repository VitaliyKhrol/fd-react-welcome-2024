import React, { Component } from 'react';
// import TodoForm from './TodoForm';
import TodoItem from './TodoItem';


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo:'',
            list:[]
        }
    }

    changeHandler =({target:{value, name}})=>{
        this.setState({
            [name]:value
        })
    }

    submitHandler=(event)=>{
        event.preventDefault();
        const {list,todo} =this.state
        const todoObject={
            body: todo,
            id: list.length
        }
        this.setState({
            list: [...list,todoObject],
            todo:''
        })

    }

    mapList = ()=>{
        const{list}= this.state;
        return list.map(elem=><TodoItem textItem={elem.body} key={elem.id}/>)


    }


    render() {
        return (

            <section>
                <form onSubmit={this.submitHandler}>
                    <input
                        type='text'
                        placeholder='You sprava'
                        name="todo"
                        value={this.state.todo}
                        onChange={this.changeHandler} />
                    <button>Отправить</button>
                    </form>
                    <ul>
                        {this.mapList()}
                    </ul>
            </section>


        );
    }
}

export default TodoList;
