import React from 'react';
import classes from './logo.module.css';

const logo = (props) => {
    return (
        <p style={{display: props.display}} className={classes.Logo}>Where is it.</p>
    )
}


export default logo;