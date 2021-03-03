import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RenderList } from '../../common/utils';
import { movieApi, tvApi } from '../../common/api';
import InputBox from './InputBox';
import { searchData } from '../../_actions/action';

const Container = styled(motion.div)`
	overflow-x: hidden;
	padding-top: 50px;
	padding-bottom: 40px;
`;

const Search = () => {
	const storedData = useSelector((state) => state.store?.searchData?.payload);
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const [tv, setTv] = useState([]);

	useEffect(() => {
		if (storedData?.results !== undefined) {
			setMovies(storedData.results.movies);
			setTv(storedData.results.tv);
			setIsLoading(false);
			console.log('리덕스에서 가져오기');
		}
	}, [storedData]);

	const onSearch = async (value) => {
		if (value !== '') {
			const {
				data: { results: movies },
			} = await movieApi.search(value);

			const {
				data: { results: tv },
			} = await tvApi.search(value);

			dispatch(searchData(value, { movies, tv }));
		}
	};

	return (
		<Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			{console.log('Render Search')}
			<InputBox onSearch={onSearch} />
			{isLoading ? null : (
				<>
					{console.log(movies.length + ' ' + tv.length)}
					{movies?.length > 0 && RenderList('Movie', movies)}
					{tv?.length > 0 && RenderList('TV Shows', tv)}
					{tv?.length === 0 && movies?.length === 0 && RenderList('No Results')}
				</>
			)}
		</Container>
	);
};

export default Search;
