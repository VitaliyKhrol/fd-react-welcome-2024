import UserContext from "../../../../../../contexts/UserContext";



const InerChild = (props) => {
    return (
        <UserContext.Consumer>
            {([{firstName,lastName,avatar},callback]) => {
                return (
                    <div style={{ border: 'inherit', padding: '20px' }}>
                        <p>InnerChild</p>
                        <p>{firstName}  {lastName}</p>
                        <img src={avatar} style ={{width:'100px' , height:'100px'}}/>
                        <button onClick={callback}>LogOut</button>
                    
                    </div>
                )
            }}

        </UserContext.Consumer>
    );
}

export default InerChild;
