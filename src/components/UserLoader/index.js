import React, { Component, useEffect, useState } from 'react';
import useData from '../../hooks/useData';
import { getUsers } from '../../api/user.js';



const UserLoader = (props) => {

    const { data, isFething, error } = useData(getUsers);

    return(
        <ul>
            {data.map((el)=><li key={el.id}>{el.name}</li>)}
        </ul>
        )
    
}

export default UserLoader;
