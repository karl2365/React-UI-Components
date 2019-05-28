import React from 'react';
import './Button.css';


const Operation = (props) => {
    return(
        <div className={props.buttonStyle}>{props.operation}</div>
    );
}


export default Operation;