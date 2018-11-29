import React from 'react';
import Toolbar from '../../components/NavItems/Toolbar/toolbar';
import Button from '../../components/UI/Button/button';
import classes from './databasepage.module.css';


const dataPage = () => {

    return (
        <div style={{overflowY: 'hidden', height: '100vh'}}>
        <Toolbar/>
        <div className={classes.DataPage}>
            <div className={classes.Header}>Where is it?</div>
            <div className={classes.Info}>
                This application powered by TMDb and Firebase APIs.
                This database is open to everyone who would like use it for
                different applications.
                As the application grows, the authentication option will be added
                for those who would like to contribute to the database.
                The link below is downloadable .JSON format of the database.
            </div>
            <Button text={'Download'} clicked={() => {window.location.href = 'https://drive.google.com/uc?export=download&id=1h8S6uhk9xAfh2Qs64P5IJ5dJnBt8dnSw'}}/>
        </div>
        </div>
    )
}


export default dataPage;