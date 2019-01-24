import React from 'react';
import './Form.css';

function UpdateForm (props) {
    const friend = props.friends.find(
        friend => `${friend.id}` === props.match.params.id
    );
    return (
        <div className="form-wrapper">
            <form>
                <input placeholder="Name" value={props.name} onChange={props.handleInput}/>
                <input placeholder="Email" value={props.email} onChange={props.handleInput}/>
                <input placeholder="Age" value={props.age} onChange={props.handleInput}/>
                <button onClick={() => props.updateFriend(friend.id)}>Update Friend</button>
            </form>
        </div>
    );
}

export default UpdateForm;