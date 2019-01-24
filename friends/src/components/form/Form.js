import React from 'react';

import './Form.css';

function Form (props) {    
    function handleSumbit(e){
        e.preventDefault();

        if(props.isUpdating) {
            props.updateFriend(props.friendId);
        } else {
            props.addNewFriend();
        }
    }

    return (
        <div className="form-wrapper">
            <h2>{props.isUpdating ? 'Update Friend' : 'Add New Friend'}</h2>
            <form>
                <input placeholder="Name" value={props.name} onChange={props.handleInput}/>
                <input placeholder="Email" value={props.email} onChange={props.handleInput}/>
                <input placeholder="Age" value={props.age} onChange={props.handleInput}/>
                <button onClick={handleSumbit}>{props.isUpdating ? 'Update Friend' : 'Add New Friend'}</button>
            </form>
        </div>
    );
}

export default Form;