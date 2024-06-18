import React from 'react';
import Child from './Child';

const Parent = () => {

const userData ={
    userName : 'Test '
}

    return (
        <div>
            <Child>
                {({data:{value}})=>{
                    return <p> {value}- {userData.userName}</p>
                }}

            </Child>
            
        </div>
    );
}

export default Parent;
