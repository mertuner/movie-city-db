import React, { Component } from 'react';
import MovieCard from './MovieCard/moviecard';
import classes from './moviecards.module.css'
import axios from 'axios';
import SearchArea from "../../UI/SearchArea/search";
import City from '../City/city';
import ErrorCard from '../ErrorCard/errorcard';
import config from '../../../firebase';
import firebase from 'firebase/app';
import "firebase/storage";

const baseImgUrl = "https://image.tmdb.org/t/p/w780";

firebase.initializeApp(config)
const storage = firebase.storage().ref()

class MovieCards extends Component {

    state = {
        city: 'new_york_city',
        movies: [

        ],
        error: null,
        upperCaseCity: "New York City",
        icon: null
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevState.city !== this.state.city) {
            let updatedMovies = [];
            let newCity = this.state.city.split(" ").join("_");
            try {
                let result = await axios.get('https://moviedb-8a20c.firebaseio.com/movies/city/' + newCity + '.json');
                let iconUrl = await storage.child(`${newCity}.svg`).getDownloadURL();
                for (let obj of Object.entries(result.data)) {
                    updatedMovies.push(obj);
                }
                let upperCaseCity = this.cityNametoUpperCase(this.state.city);
                this.setState({ movies: updatedMovies, icon: iconUrl, upperCaseCity: upperCaseCity });
            } catch (error) {
                console.log(error);
                this.setState({ error: error, movies: [], upperCaseCity: null});
            }
        }
    }
      
    
    async componentDidMount() {
        let updatedMovies = [];
        try {
            let result = await axios.get('https://moviedb-8a20c.firebaseio.com/movies/city/' + this.state.city + '.json');
            let iconUrl = await storage.child(`${this.state.city}.svg`).getDownloadURL();
            for (let obj of Object.entries(result.data)) {
                updatedMovies.push(obj);
            }
            this.setState({ movies: updatedMovies, icon: iconUrl });
        } catch (error) {
            this.setState({ error: error});
        }
    }
    
    comp

    cityNametoUpperCase = (str) => {
        return (str.replace(/\w\S*/g, (txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }))
    }

    cityNameHandler = (e) => {
        if (e.key === 'Enter') {
            this.setState({ city: e.target.value.toLowerCase(), error: false});
            e.target.value = null;
            e.target.blur();
        }   
    }

    render() {
        let movies = <ErrorCard errorCity ={this.state.city}/>
        let iconURL = this.state.icon;
        let city = null;
        if (!this.state.error) {
                movies = this.state.movies.map(curMov => {
                    return (
                        <MovieCard
                            title={curMov[0]}
                            url={baseImgUrl + curMov[1].img_path}
                            iconUrl = {iconURL}
                            key ={curMov[1].id}
                        />
                    )
                })
                city = <City city={this.state.upperCaseCity} />
            }
 
        return (
                <>
                    <SearchArea changed={this.cityNameHandler} />
                    {city}
                    <div className={classes.MovieCards}>
                        {movies}
                    </div>
                </>
        )
    }


}


export default MovieCards;