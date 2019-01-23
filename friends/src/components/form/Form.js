import React from 'react';
import './Form.css';

function Form (props) {
    return (
        <div className="form-wrapper">
            <form>
                <input placeholder="Name" value={props.name} onChange={props.handleInput}/>
                <input placeholder="Email" value={props.email} onChange={props.handleInput}/>
                <input placeholder="Age" value={props.age} onChange={props.handleInput}/>
                <button onClick={props.addNewFriend}>Add Friend</button>
            </form>
        </div>
    );
}

export default Form;