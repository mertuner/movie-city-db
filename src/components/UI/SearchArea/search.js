import React from 'react';
import classes from './search.module.css';
const SearchArea = (props) => {
    return (
        <div>
            <input className={classes.Search} type='text' placeholder='Type your favorite city' onKeyDown={props.changed}/>
        </div>
    )
}

export default SearchArea;