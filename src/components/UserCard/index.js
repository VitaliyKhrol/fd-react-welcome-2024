import React from "react";
import './style.css';


class UserCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      
        const { user: {name: {first,last}, picture: {medium} , email}} = this.props;
      
        return (

            <div className="card-wrapper">
              <div className="images-wrapper"> 
                   <img className="avatar" alt="" src={medium} ></img>n
              </div>
                 
                    <h2>{first} {last}</h2>
                    <p>{email}</p>
                    <button>Click</button>
            </div>


        )
    }
}


export default UserCard;