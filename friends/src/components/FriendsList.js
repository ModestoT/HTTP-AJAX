import React from 'react';

import Friend from './Friend';
import './FriendsList.css';

function FriendsList (props){
    return (
        <div className="friends-list">
            {props.friends.map(friend => {
              return <Friend friend={friend} key={friend.id} updateFriend={props.updateFriend} deleteFriend={props.deleteFriend} />
            })}
        </div>
    );
}

export default FriendsList;