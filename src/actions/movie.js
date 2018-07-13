export const REQUEST_MOVIE_DATA = "REQUEST_MOVIE_DATA";
export const RECEIVE_MOVIE_DATA = "RECEIVE_MOVIE_DATA";
export const RECEIVE_MOVIE_DATA_FAILED = "RECEIVE_MOVIE_DATA_FAILED";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export function requestMovieData() {
	return {
		type   : REQUEST_MOVIE_DATA,
		payload: {}
	}
}

export function receiveMovieData(data) {
	const movies = data.map(movie => {
		movie.isFavorite = false
		return movie
	});

	return {
		type   : RECEIVE_MOVIE_DATA,
		payload: movies
	}
}

export function receiveMovieDataFailed(error) {
	return {
		type   : RECEIVE_MOVIE_DATA_FAILED,
		payload: error
	}
}

export const toggleFavorite = (imdbID) => {
	return {
		type: TOGGLE_FAVORITE,
		payload: imdbID
	}
}
