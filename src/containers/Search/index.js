import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RenderList } from '../../utils';
import { movieApi, tvApi } from '../../api';

const Container = styled(motion.div)`
	overflow-x: hidden;
	padding-top: 50px;
	padding-bottom: 40px;
`;

const Form = styled.form`
	margin-top: 20px;
	margin-left: auto;
	margin-right: auto;
	height: 30px;
	width: 80%;
`;

const Input = styled.input`
	all: unset;
	background-color: white;
	width: 90%;
	height: 100%;
	text-align: center;
	border-radius: 15px;
	color: black;
	font-size: 16px;
	width: 100%;
`;

const Search = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const [tv, setTv] = useState([]);
	const [value, setValue] = useState('');

	const searchQuery = async () => {
		if (value !== '') {
			const {
				data: { results: movies },
			} = await movieApi.search(value);

			const {
				data: { results: tv },
			} = await tvApi.search(value);

			setIsLoading(false);
			setMovies(movies);
			setTv(tv);
		}
	};

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		searchQuery();
	};

	return (
		<Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<Form onSubmit={handleSubmit}>
				<Input value={value} onChange={handleChange} placeholder='키워드 입력' />
			</Form>
			{isLoading ? null : (
				<>
					{movies?.length > 0 && RenderList('Movie', movies)}
					{tv?.length > 0 && RenderList('TV Shows', tv)}
					{tv?.length === 0 && movies?.length === 0 && RenderList('No Results')}
				</>
			)}
		</Container>
	);
};

export default Search;
