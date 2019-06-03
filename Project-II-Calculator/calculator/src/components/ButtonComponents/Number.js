import React from 'react';
import './Button.css';


const Number = (props) => {
    return(
        <div className={props.buttonStyle}>{props.number}</div>
    );
}


export default Number;