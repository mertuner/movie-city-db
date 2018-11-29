import React from 'react';
import classes from './navitem.module.css';


const NavitemSearch = (props) => {
    return (
        <li className={classes.NavItemSearch}>{props.name}</li>
    )
}


export default NavitemSearch;