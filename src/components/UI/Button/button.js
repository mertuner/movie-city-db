import React from 'react';
import classes from './button.module.css';
const Button = (props) => {
    return (
        <button onClick = {props.clicked} className={classes.Button}>{props.text}</button>
    )
}

export default Button;