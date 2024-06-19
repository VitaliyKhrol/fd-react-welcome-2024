import React from 'react';
import UserContext from '../../../contexts/UserContext'

const UserMenu = () => {

    return (
        <UserContext.Consumer>
            {([ userData, callback]) => {
                if (Object.keys(userData).length === 0){
                    return null
                }

                return (
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <img src={userData.avatar} style={{height: '50px', width: '50px'}} />
                        <p>{userData.firstName} {userData.lastName}</p>
                        <button onClick={callback} style={{ height: '20px'}} >logOut</button>
                    </div>
                );
            }}
        </UserContext.Consumer>

    );
}

export default UserMenu;
