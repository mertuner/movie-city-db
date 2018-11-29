import React from 'react';
import classes from './sidedrawer.module.css';
import NavigationItems from '../../NavItems/navitemssearch';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <div className={attachedClasses.join(' ')}>
                <NavigationItems clicked={props.sideclick}/>
        </div>
    )
}

export default sideDrawer;