import React from "react";
import './style.css';


class UserCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user: {name: userName, profilePicture: userPicture, description:userDescription}} = this.props;
      
        return (

            <div className="card-wrapper">
              <div className="images-wrapper"> 
                   <img className="avatar" alt="" src={userPicture} ></img>n
              </div>
                 
                    <h2>{userName}</h2>
                    <p>{userDescription}</p>
                    <button>Click</button>
            </div>


        )
    }
}


export default UserCard;