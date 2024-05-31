import React, { Component } from 'react';
import styles from './TodoForm.module.css';
import cx from 'classnames';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            isInputValid: true,
        }
    }


    changeHandler = ({ target: { value, name } }) => {
        if (value.includes(' ')) {
            this.setState({
                isInputValid: false,
            })
        } else {
            this.setState({
                isInputValid: true,
            })
        }
        this.setState({
            [name]: value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.sendDataToParent(this.state.todo);
        this.setState({
            todo: ''
        })
    }



    render() {
        const { todo, isInputValid } = this.state;
   
        const cnames = cx({
                [styles.input]: true,
                [styles.valid]: isInputValid,
                [styles.invalid]: !isInputValid
            });

        return (
            <form onSubmit={this.submitHandler}>
                <input
                    type='text'
                    placeholder='You sprava'
                    name="todo"
                    value={todo}
                    onChange={this.changeHandler}
                    className={cnames} />
                <button>Отправить</button>
            </form>
        );
    }


}
function cx(objectClassNames) {
    const array = Object.entries(objectClassNames);
    const arraySort = array.filter(([cln, condition]) => condition);
    const mapped = arraySort.map(([cln, condition]) => cln);
    return mapped.join(' ')
}


export default TodoForm;
