import React from 'react';

import './FriendsList.css';

function FriendsList (props) {
    return(
        <div className="friend-info">
            <h1>Name: {props.friend.name}</h1>
            <h2>Email: {props.friend.email}</h2>
            <h2>Age: {props.friend.age}</h2>     
        </div>
    );
}

export default FriendsList;