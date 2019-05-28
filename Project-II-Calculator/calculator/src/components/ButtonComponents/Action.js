import React from 'react';
import './Button.css';


const Action = (props) => {
    return(
        <div className={props.actionStyle}>{props.action}</div>
    );
}


export default Action;