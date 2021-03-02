import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Loader from '../../components/Loader';
import { RenderList } from '../../utils';

import { getTvData } from '../../_actions/action';
import { useSelector, useDispatch } from 'react-redux';

const Container = styled(motion.div)`
	overflow-x: hidden;
	padding-top: 30px;
	padding-bottom: 40px;
`;

function Tv() {
	const isSaved = useSelector((state) => state.store.tvData);
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);
	const [onlyOnce, setOnlyOnce] = useState(true);
	const [today, setToday] = useState([]);
	const [thisWeek, setThisWeek] = useState([]);
	const [topRated, setTopRated] = useState([]);
	const [popular, setPopular] = useState([]);

	useEffect(() => {
		console.log('useEffect');
		const getData = async () => {
			if (!isSaved) {
				await dispatch(getTvData()).then((res) => {
					setToday(res.payload.today);
					setThisWeek(res.payload.thisWeek);
					setTopRated(res.payload.topRated);
					setPopular(res.payload.popular);
					setIsLoading(false);
				});
				console.log('axios ' + isLoading);
			} else {
				setToday(isSaved.payload.today);
				setThisWeek(isSaved.payload.thisWeek);
				setTopRated(isSaved.payload.topRated);
				setPopular(isSaved.payload.popular);
				setIsLoading(false);
				console.log('redux ' + isLoading);
			}
		};
		if (onlyOnce) {
			getData();
			setOnlyOnce(false);
		}

		return () => setIsLoading(false);
	}, [isSaved, dispatch, isLoading, onlyOnce]);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
					{today?.length > 0 && RenderList('Today', today)}
					{thisWeek?.length > 0 && RenderList('ThisWeek', thisWeek)}
					{topRated?.length > 0 && RenderList('TopRated', topRated)}
					{popular?.length > 0 && RenderList('Popular', popular)}
				</Container>
			)}
		</>
	);
}
export default Tv;
