import React, { Component } from 'react';
import {userData} from "./userData";
import UserCard from '../UserCard';



class UserDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: userData,
            isSort: true,
        }
    }


    userMap = () => this.state.users.map((userObj) => < UserCard user={userObj} key={userObj.id} />)

    sortUsers = () => {
        console.log(this.state)
        const newUsers = [...this.state.users];
        newUsers.sort((a, b) => (a.name > b.name && this.state.isSort ? 1 : -1));

        this.setState({
            users: newUsers,
            isSort: !this.state.isSort
        })
    }


    render() {
        return (
            <section className="root">
                <button onClick={this.sortUsers}>Sorted</button>
                <div className="card-container">
                    {this.userMap()}
                </div>

            </section>
        );
    }
}

export default UserDashboard;
