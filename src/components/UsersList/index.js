import React, { useState } from 'react';
import UserCard from '../UserCard'



function UsersList (props) {
    const [isSort,setSort] = useState(true);
    const [filterValue,setFilterValue] = useState('');
          
   const  filterList=()=>{
             const filtered = props.usersList.filter(({ name: {first, last}})=>{
                return first.toLowerCase().includes(filterValue) || last.toLowerCase().includes(filterValue)
        })
        return filtered;
    }

   const userMap = (userArray) => userArray.map((userObj) => < UserCard user={userObj} key={userObj.email} />);

    // sortUsers = (userArray) => {
          
    // const sortedUser = userArray.sort((a, b) => (a.name > b.name && this.state.isSort ? 1 : -1));
    //     console.log (sortedUser);
    //     return sortedUser;
    // }


  const  changeHandler = ({target: { value, name } }) => {
        setFilterValue (value);
        filterList()
    }

        return (
            <>
                {/* <button onClick={this.sortUsers()}>Sorted</button> */}
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
