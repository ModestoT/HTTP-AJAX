import React from 'react';
import { Link } from 'react-router-dom';

import './FriendsList.css';

function Friend (props) {
    return(
        <div className="friend-info">
            <h1>Name: {props.friend.name}</h1>
            <h2>Email: {props.friend.email}</h2>
            <h2>Age: {props.friend.age}</h2>  
            {/* <button onClick={() => props.updateFriend(props.friend.id)}>Update Friend</button>    */}
            <button onClick={e => props.populateForm(e, props.friend.id)}>Update Friend</button>
            <button onClick={e => props.deleteFriend(e, props.friend.id)}>Delete Friend</button>
        </div>
    );
}

export default Friend;