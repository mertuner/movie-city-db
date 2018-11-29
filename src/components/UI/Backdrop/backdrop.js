import React from 'react';
import classes from './backdrop.module.css';



const Backdrop = (props) => {
    let attachedClasses = [classes.Backdrop];
    if (props.hide) {
        attachedClasses = [classes.SideDrawer, classes.Hide];
    }
    return (
        <div className={attachedClasses.join(' ')} onClick={props.clicked}></div>
    )

}


export default Backdrop;