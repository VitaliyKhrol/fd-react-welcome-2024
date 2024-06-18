import UserContext from "../../../../../../contexts";



const InerChild = (props) => {
    return (
        <UserContext.Consumer>
            {([{firstName,lastName,avatar},callback]) => {
                return (
                    <div style={{ border: '2px solid black', padding: '20px' }}>
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
