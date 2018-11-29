import React from 'react';
import classes from './errorcard.module.css';

const errorCard = (props) => {

    return (
        <div className={classes.Container}>
            <p>No result found matching "{props.errorCity}"</p>
            <h3>Search tips</h3>
            <ul className={classes.ErrorCard}>
                <li>
                    Check your spelling and try again.
                </li>
                <li>
                    The city you looking for may not be in the database.
                </li>
                <li>
                    In some cases city names might be confusing. For example:
                    <ul className={classes.ErrorCard}>
                        <li>
                            "New York" is the state name,
                            "New York City" is what you are looking for.
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default errorCard;