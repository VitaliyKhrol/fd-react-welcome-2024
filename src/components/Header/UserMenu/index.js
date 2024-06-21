
import {withUser}  from '../../../HOCs/withUser';

function UserMenu (props) {
   const {user, setUser} = props
                   
                if (!Object.keys(user).length) {
                    return null
                }
                return (
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <img src={user.avatar} style={{ height: '50px', width: '50px' }} />
                        <p>{user.firstName} {user.lastName}</p>
                        <button onClick={setUser} style={{ height: '20px' }} >logOut</button>
                    </div>
                );
}


const wrappedComponent = withUser(UserMenu)

export default wrappedComponent;
