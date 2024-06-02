import React, { Component } from 'react';
import UserCard from '../UserCard'




class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSort: true,
        }
    }


    userMap = () => this.props.usersList.map((userObj) => < UserCard user={userObj} key={userObj.email} />);

    // sortUsers = () => {
    //     const newUsers = [...this.props.usersList];
    //     newUsers.sort((a, b) => (a.name > b.name && this.state.isSort ? 1 : -1));

    //     this.setState({
    //         users: newUsers,
    //         isSort: !this.state.isSort
    //     })
    // }

    render() {
        return (
            <>
                <button onClick={this.sortUsers}>Sorted</button>
                <div className="card-container">
                    {this.userMap()}
                </div>
            </>
        ) 
    }
}

export default UsersList;
