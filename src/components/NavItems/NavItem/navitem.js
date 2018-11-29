import React from 'react';
import classes from './navitem.module.css';

const Navitem = (props) => {
    return (
        <li className={classes.NavItem}>{props.name}</li>
    )
}


export default Navitem;