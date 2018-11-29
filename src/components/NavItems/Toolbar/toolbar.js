import React, { Component } from 'react';
import NavigationItems from '../navitemssearch';
import classes from './toolbar.module.css';
import ToggleButton from '../../UI/HambergerIcon/hamburgericon';
import SideDrawer from '../../UI/SideDrawer/sidedrawer';
import Logo from '../../FullPageItems/Logo/logo';

class toolbar extends Component {
    state = {
        animate: false,
    }

    toggleHandler = () => {
        this.setState((prevState) => {
            return { animate: !prevState.animate };
        });
    }
    print = () => {
        console.log('insider!');
    }
    
    render() {
        return (
            <>
                <header style={this.state.animate ? {justifyContent: 'flex-end'} : {justifyContent: 'space-between'}}className={classes.Toolbar}>
                    <Logo display = {this.state.animate ? 'none' : 'block'}/>
                    <ToggleButton animate={this.state.animate} clicked={this.toggleHandler} />
                    <SideDrawer open={this.state.animate} sideclick={this.toggleHandler}/>
                    <nav className={classes.DesktopOnly}>
                        <NavigationItems/>
                    </nav>
                </header>
            </>
        )
    }
}
;

export default toolbar;