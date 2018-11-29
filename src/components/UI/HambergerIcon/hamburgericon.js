import React from 'react';
import classes from './hamburgericon.module.css'

const Icon = (props) => {

    return (
        <div className={props.animate ? classes.Change : classes.Container} onClick={props.clicked}>
            <div className={classes.Bar1}></div>
            <div className={classes.Bar2}></div>
            <div className={classes.Bar3}></div>
        </div>
    )
}


export default Icon;