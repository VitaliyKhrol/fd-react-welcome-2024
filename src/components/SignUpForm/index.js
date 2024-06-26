
import styles from "./SignUp.module.css";
import React, { Component } from 'react';
import { SCHEMA } from "../../schemas";


class SignUpForm extends Component {
constructor (props){
    super(props);
    this.state = {
        firstName:'',
        lastName:'',
        email:'',
        pass:''
    }
}


changeHandler =({target:{name,value}})=>{
    this.setState({
        [name]:value
    })
}

submitHandler=(event)=>{
    event.preventDefault();
    SCHEMA.validate(this.state)
    .then(validateDate => {
        console.log(validateDate)
    })
    .catch(err=>{
        console.log(err.message);
    })
}


    render() {
        const {firstName,lastName,email,pass} = this.state;
        return (
            <form className={styles.form} 
            onSubmit={this.submitHandler}
            >
                <input type="text"
                name="firstName"
                value={firstName}
                onChange={this.changeHandler}
                placeholder="firstName"
                />
                 <input type="text"
                name="lastName"
                value={lastName}
                onChange={this.changeHandler}
                placeholder="lastName"
                />
                 <input type="text"
                name="email"
                value={email}
                onChange={this.changeHandler}
                placeholder="email"
                />
                 <input type="text"
                name="pass"
                value={pass}
                onChange={this.changeHandler}
                placeholder="password"
                />
                <button>Send</button>

            </form>
        );

    }
}


export default SignUpForm;