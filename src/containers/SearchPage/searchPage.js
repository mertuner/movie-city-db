import React, { Component } from 'react';
import MovieCards from '../../components/SearchPageItems/MovieCards/moviecards';
import ToolBar from '../../components/NavItems/Toolbar/toolbar'


class SearchPage extends Component {
    render() {
        return (
            <>
                <ToolBar />
                <MovieCards />
            </>
        )
    }
}


export default SearchPage;