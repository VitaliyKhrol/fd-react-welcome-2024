
import UserContext from '../../../../../../contexts/UserContext'
import { withUser } from '../../../../../../HOCs/withUser';
import { useContext } from 'react';


function InerChild(props) {
    const [user, setUser] = useContext(UserContext);

                return (
                <div style={{ border: 'inherit', padding: '20px' }}>
                    <p>InnerChild</p>
                    <p>{user.firstName}</p>
                    {/* <img src={avatar} style={{ width: '100px', height: '100px' }} /> */}
                    <button onClick={setUser}>LogOut</button>

                </div>
            )
       
}


export default InerChild;
