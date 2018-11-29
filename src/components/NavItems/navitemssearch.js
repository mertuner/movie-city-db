import React from 'react';
import NavitemSearch from './NavItem/navitemsearch';
import classes from './navitems.module.css';
import {NavLink} from 'react-router-dom';


const style = {
    marginRight: "4%",
    textDecoration: 'none',
    zIndex: '200',
}


const NavItemsSearch = (props) => {
    return (
        <ul className={classes.NavItems} >
            <NavLink style={style} to='/' onClick={props.clicked}><NavitemSearch name={"Home"}/></NavLink>
            <NavLink style={style} to='/discover' onClick={props.clicked}><NavitemSearch name={"Discover"}/></NavLink>
            <NavLink style={style} to='/database' onClick={props.clicked}><NavitemSearch name={"Database"}/></NavLink>
            {/* <NavLink style={style} to='/'><NavitemSearch name={"Contribute"}/></NavLink>
            <NavLink style={style} to='/'><NavitemSearch name={"About"}/></NavLink> */}
        </ul>
    )
}

export default NavItemsSearch;