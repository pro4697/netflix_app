import React from 'react';
import Section from '../components/Section';
import Movie from '../components/MovieCard';
import Panel from '../components/Panel';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

export const RenderList = (title, data) => (
	<Section title={title}>
		{data?.map((movie) => (
			<Movie
				key={movie.id}
				id={movie.id}
				title={movie.title || movie.name}
				date={movie.release_date || movie.first_air_date || '0000-00-00'}
				overview={movie.overview}
				poster={IMG_PATH + movie.poster_path}
				backdrop={IMG_PATH + movie.backdrop_path}
				vote={movie.vote_average}
				isTv={movie.title ? false : true}
			/>
		))}
	</Section>
);

export const RenderPanel = (data) =>
	data.map((movie) => (
		<Panel
			key={movie.id}
			id={movie.id}
			title={movie.title}
			date={movie.release_date}
			overview={movie.overview}
			poster={IMG_PATH + movie.poster_path}
			backdrop={IMG_PATH + movie.backdrop_path}
			vote={movie.vote_average}
		/>
	));

export const overviewReplace = (movie, overview) => {
	for (let i = 0; i < movie.length; i++) {
		if (movie[i].overview.length < 10) {
			movie[i].overview = overview[i].overview;
		}
	}
};

export const formatDate = (date) => {
	const _date = date.split('-');
	return `${_date[0]}. ${_date[1]}. ${_date[2]}.`;
};
