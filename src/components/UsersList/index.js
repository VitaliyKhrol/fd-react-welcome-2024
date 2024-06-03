import React, { Component } from 'react';
import UserCard from '../UserCard'



class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSort: true,
            filterValue: ''
        }
    }

    filterList=()=>{
        const {filterValue}=this.state;
        const filtered = this.props.usersList.filter(({ name: {first, last}})=>{
                return first.toLowerCase().includes(filterValue) || last.toLowerCase().includes(filterValue)
        })
  
        return filtered;
    }


    userMap = (userArray) => userArray.map((userObj) => < UserCard user={userObj} key={userObj.email} />);

    // sortUsers = (userArray) => {
          
    // const sortedUser = userArray.sort((a, b) => (a.name > b.name && this.state.isSort ? 1 : -1));
    //     console.log (sortedUser);
    //     return sortedUser;
    // }


    changeHandler = ({ target: { value, name } }) => {
        this.setState({
            [name]: value
        });
        this.filterList()

    }

    render() {
        const { filterValue } = this.state
        return (
            <>
                {/* <button onClick={this.sortUsers()}>Sorted</button> */}
                <input
                    type="text"
                    placeholder='you name'
                    name='filterValue'
                    value={filterValue}
                    onChange={this.changeHandler}
                />
                <div className="card-container">
                    {this.userMap(this.filterList())}
                    
                </div>
            </>
        )
    }
}

export default UsersList;
