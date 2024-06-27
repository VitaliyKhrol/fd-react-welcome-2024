import React, { useEffect, useState } from 'react';

import UsersList from '../UsersList';
import Spiner from '../Spiner';
import {getUsers} from '../../api'



function UserDashboard (props) {
    const [users,setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [isFetching,setFetching] = useState(true);
    const [page,setPage] = useState(1);

    useEffect (()=>{
        getData();
    },[page])

   const getData = ()=> {
        getUsers({page})
            .then((data) => {
               setUsers(data.results)
            }).catch((error) => {
                setError(error)

            })
            .finally(()=>{
                setFetching(false)
            })
    }


   const next =()=>{
         setPage(page+1)

    }

   const prev =()=>{
        if (page >1){
            setPage(page-1) 
        }        
    }


            return (
            <section className="root">
                <button onClick={prev}>{'<'}</button>
                {  page  }
                <button onClick={next}>{'>'}</button>
           
                {users && <UsersList usersList={users}/>}
                {error && <div>{error.message}</div>}
                {isFetching && <Spiner />}
            </section>
        );
    }


export default UserDashboard;
