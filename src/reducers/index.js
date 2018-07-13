import {combineReducers} from 'redux-loop';
import movieReducer from './movie';

const rootReducer = combineReducers({
	movie: movieReducer
})

export default rootReducer