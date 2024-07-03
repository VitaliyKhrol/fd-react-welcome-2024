import React from "react";
import './style.scss';
import PropTypes from 'prop-types';


const UserCard = (props) => {
 
        const { user: { name: { first, last }, picture: { medium }, email } } = props;
        return (

            <div className="card-wrapper">
                <div className="images-wrapper">
                    <img className="avatar" alt="" src={medium} ></img>n
                </div>

                <h2>{first} {last}</h2>
                <p className="desc">{email}</p>
                <button >Click</button>
            </div>
        )
    }


UserCard.defaultProps = {
    user: {
        name: {
            first: 'Anonim',
            last: 'Anonomus'
        },
        picture: {
            medium: '#'
        },
        email: ''
    }
}


UserCard.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.shape({
            first: PropTypes.string.isRequired,
            last: PropTypes.string,
        }).isRequired,
        picture: PropTypes.shape({
            medium: PropTypes.string.isRequired
        }),
        email: PropTypes.string.isRequired,
    }).isRequired
}



export default UserCard;