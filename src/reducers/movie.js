import {REQUEST_MOVIE_DATA, RECEIVE_MOVIE_DATA, RECEIVE_MOVIE_DATA_FAILED, TOGGLE_FAVORITE,
   receiveMovieData, receiveMovieDataFailed} from '../actions/movie';
import {fetchMovieData} from '../effects/movie';
import {loop, Cmd} from 'redux-loop';

export default (state={data: []}, action) => {

  switch(action.type) {

    case REQUEST_MOVIE_DATA: return loop({
      ...state,
      loading: true
    }, Cmd.run(fetchMovieData, {
      args: [],
      successActionCreator: receiveMovieData,
      failActionCreator: receiveMovieDataFailed
    }))

    case RECEIVE_MOVIE_DATA: return {
      ...state,
      loading: false,
      data: action.payload
    }

    case RECEIVE_MOVIE_DATA_FAILED: return {
      ...state,
      loading: false,
      error: action.payload
    }

    case TOGGLE_FAVORITE: return {
      ...state,
      data: state.data.map(movie => {
        if(movie.imdbID === action.payload) {
          movie.isFavorite = !movie.isFavorite;
        }
        return movie;
      })
    }
    
  }
  return state;
}