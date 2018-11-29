import React from 'react';
import classes from './background.module.css';
import Header1 from '../../components/FullPageItems/Headers/header1'
import Header2 from '../../components/FullPageItems/Headers/header2';
import Button from '../../components/UI/Button/button';
import { NavLink } from 'react-router-dom';


const Background = () => {
    return (
        <div className={classes.Background}>
            <img className={classes.Image} alt={"Oopps! Something went wrong here"}></img>
            <div className={classes.InfoBox}>
                <Header1 />
                <Header2 />
                <NavLink to="/discover"><Button text={'Try it'}/></NavLink>
            </div>
        </div>
    )
}

export default Background;