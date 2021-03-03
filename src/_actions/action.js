import { movieApi, tvApi } from '../common/api';
import { MOVIE_DATA, TV_DATA, SEARCH_DATA } from './types';
import { overviewReplace } from '../common/utils';

export const getMovieData = async () => {
	const {
		data: { results: nowPlaying },
	} = await movieApi.nowPlaying();

	const {
		data: { results: overview1 },
	} = await movieApi.nowPlayingUS();
	overviewReplace(nowPlaying, overview1);

	const {
		data: { results: topRated },
	} = await movieApi.topRated();

	const {
		data: { results: overview2 },
	} = await movieApi.topRatedUS();
	overviewReplace(topRated, overview2);

	const {
		data: { results: popular },
	} = await movieApi.popular();

	const {
		data: { results: overview3 },
	} = await movieApi.popularUS();
	overviewReplace(popular, overview3);

	const {
		data: { results: upComing },
	} = await movieApi.upComing();

	const {
		data: { results: overview4 },
	} = await movieApi.upComingUS();
	overviewReplace(upComing, overview4);

	return {
		type: MOVIE_DATA,
		payload: {
			nowPlaying,
			topRated,
			popular,
			upComing,
		},
	};
};

export const getTvData = async () => {
	const {
		data: { results: today },
	} = await tvApi.today();

	const {
		data: { results: thisWeek },
	} = await tvApi.thisWeek();

	const {
		data: { results: topRated },
	} = await tvApi.topRated();

	const {
		data: { results: popular },
	} = await tvApi.popular();

	return {
		type: TV_DATA,
		payload: {
			today,
			thisWeek,
			topRated,
			popular,
		},
	};
};

export const searchData = (inputValue, results) => {
	return {
		type: SEARCH_DATA,
		payload: {
			inputValue,
			results,
		},
	};
};
