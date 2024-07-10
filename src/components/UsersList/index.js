import React, { useState } from 'react';
import UserCard from '../UserCard'



function UsersList(props) {
    const [isSort, setSort] = useState(true);
    const [filterValue, setFilterValue] = useState('');

    const filterList = () => {
        const filtered = props.users.filter(({ name: { first, last } }) => {
            return first.toLowerCase().includes(filterValue) || last.toLowerCase().includes(filterValue)
        })
        return filtered;
    }

    const userMap = (userArray) => userArray.map((userObj) => < UserCard user={userObj} key={userObj.email} />);


    const sortUsers = () => {
        const newUsers = [...props.users];
        newUsers.sort((a, b) => (a.name.first > b.name.first && isSort ? 1 : -1));
        setSort(!isSort);
        props.setUsers(newUsers)
    }


    const changeHandler = ({ target: { value, name } }) => {
        setFilterValue(value);
        filterList()
    }

    return (
        <>
            <button onClick={sortUsers}>Sorted</button>
            <input
                type="text"
                placeholder='you name'
                name='filterValue'
                value={filterValue}
                onChange={changeHandler}
            />
            <div className="card-container">
                {userMap(filterList())}
            </div>
        </>
    )

}

export default UsersList;
