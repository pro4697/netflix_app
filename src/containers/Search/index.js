import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RenderList } from '../../utils';
import { movieApi, tvApi } from '../../Api';
import './Search.css';

const Container = styled(motion.div)`
	overflow-x: hidden;
	padding-top: 50px;
	padding-bottom: 40px;
`;

const Search = () => {
	const [movies, setMovies] = useState([]);
	const [tv, setTv] = useState([]);
	const [state, setState] = useState({
		isLoading: true,
		movies: [],
		tv: [],
		value: '',
	});

	const searchQuery = async () => {
		if (state.value !== '') {
			const {
				data: { results: movies },
			} = await movieApi.search(state.value);

			const {
				data: { results: tv },
			} = await tvApi.search(state.value);

			//setMovies(movies);
			//setTv(tv);
			//setState({ isLoading: false });
			setState({ movies: [...movies], tv: [...tv], isLoading: false });
		}
	};

	const handleChange = (e) => {
		setState({ value: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// searchQuery();
	};

	return (
		<>
			<Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
				<form onSubmit={handleSubmit}>
					<input value={state.value} onChange={handleChange} placeholder='키워드 입력' />
				</form>
				{state.isLoading ? null : (
					<>
						{state.movies?.length > 0 && RenderList('Movie', state.movies)}
						{state.tv?.length > 0 && RenderList('TV Shows', state.tv)}
						{state.tv.length === 0 && state.movies.length === 0 && RenderList('No Results')}
					</>
				)}
			</Container>
		</>
	);
};

export default Search;
