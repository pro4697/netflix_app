import { MOVIE_DATA, TV_DATA, SEARCH_DATA } from '../_actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case MOVIE_DATA:
			return { ...state, movieData: action };
		case TV_DATA:
			return { ...state, tvData: action };
		case SEARCH_DATA:
			return { ...state, searchData: action };
		default:
			return state;
	}
};
