import React, { Component } from 'react';

import UserCard from '../UserCard';
import Spiner from '../Spiner';
import {getUsers} from '../../api'



class UserDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isSort: true,
            error: null,
            isFetching: true
        }
    }
    componentDidMount() {
        this.getData();

    }

    getData = () => {
       getUsers()
            .then((data) => {
                this.setState({
                    users: data.results,
                 })
            }).catch((error) => {
                this.setState({
                    error: error,
                })

            })
            .finally(()=>{
                this.setState({
                    isFetching: false,
                })
            })
    }

    userMap = () => this.state.users.map((userObj) => < UserCard user={userObj} key={userObj.email} />);

    sortUsers = () => {
        const newUsers = [...this.state.users];
        newUsers.sort((a, b) => (a.name > b.name && this.state.isSort ? 1 : -1));

        this.setState({
            users: newUsers,
            isSort: !this.state.isSort
        })
    }


    render() {
        const { users, error, isFetching } = this.state;

        return (
            <section className="root">
                <button onClick={this.sortUsers}>Sorted</button>
                {users && (<div className="card-container">
                    {this.userMap()}
                </div>)}
                {error && <div>{error.message}</div>}
                {isFetching && <Spiner />}
            </section>
        );
    }
}

export default UserDashboard;
