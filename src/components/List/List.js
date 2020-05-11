import React from 'react';
import './List.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const List = (props) => {
    const {name, email, phone, salary, img} = props.user;
    //console.log(props.user);
    return (
        <div className="list">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="list-text">
                <h4>{name}</h4>
                <h4><FontAwesomeIcon icon={faEnvelope} /> {email}</h4>
                <h4><FontAwesomeIcon icon={faPhoneAlt} /> {phone}</h4>
                <h4>Yearly Income: ${salary}</h4>
                <button className="add-button" 
                onClick = { () => props.handleAddFriend(props.user)}
                >                    
                    <FontAwesomeIcon icon={faUserPlus} /> Add friend
                </button>
            </div>
        </div>
    );
};

export default List;