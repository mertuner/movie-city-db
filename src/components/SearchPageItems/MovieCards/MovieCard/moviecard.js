import React from 'react';
import classes from './moviecard.module.css';


const MovieCard = (props) => {

    let iconStyle = {
            width: '30px',
            height: '30px',
            backgroundImage: `url(${props.iconUrl})`
        }
    return (
        <div className={classes.MovieCard}>
            <section className={classes.Exp}>
                <div style={iconStyle}></div>
                <p className={classes.Movie}>{props.title}</p>
            </section>
            <div style={
            {backgroundImage: `url(${props.url})`,
        }}className={classes.Image}></div>
        </div>
    )
}

export default MovieCard; 