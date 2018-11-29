import React from 'react';
import Navitem from './NavItem/navitem';
import classes from './navitems.module.css';
import {NavLink} from 'react-router-dom';


const style = {
    marginRight: "24%",
    textDecoration: 'none',
    zIndex: "200",
}

const NavItems = () => {
    return (
        <ul className={classes.NavItems}>
            <NavLink style={style} to='/'><Navitem name={"Home"}/></NavLink>
            <NavLink style={style} to='/'><Navitem name={"Database"}/></NavLink>
            <NavLink style={style} to='/'><Navitem name={"Contribute"}/></NavLink>
        </ul>
    )
}

export default NavItems;