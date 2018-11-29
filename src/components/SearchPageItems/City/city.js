import React from 'react';
import classes from './city.module.css';


const City = (props) => {
    return (
        <div className={classes.City}><p>{props.city}</p></div>
    )
}

export default City;