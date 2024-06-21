
import {withUser} from '../../../../../../HOCs/withUser'


function InerChild (props) {   
    const {user:{firstName,lastName,avatar},setUser}= props
                return (
                    <div style={{ border: 'inherit', padding: '20px' }}>
                        <p>InnerChild</p>
                        <p>{firstName}  {lastName}</p>
                        <img src={avatar} style ={{width:'100px' , height:'100px'}}/>
                        <button onClick={setUser}>LogOut</button>
                    
                    </div>
                )
}


const wrappedComponent = withUser(InerChild)

export default wrappedComponent;
