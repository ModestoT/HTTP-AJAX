import React from 'react';

function Form (props) {
    return (
        <div className="form-wrapper">
            <form>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Age"/>
            </form>
        </div>
    );
}

export default Form;