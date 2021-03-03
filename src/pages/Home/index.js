import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import F from '@egjs/react-flicking';
import { Fade, AutoPlay } from '@egjs/flicking-plugins';
import { motion } from 'framer-motion';
import Loader from '../../components/Loader';
import { RenderList, RenderPanel } from '../../common/utils';

import { getMovieData } from '../../_actions/action';

const Container = styled(motion.div)`
	overflow-x: hidden;
	padding-bottom: 40px;
`;

const Flicking = styled(F)`
	margin-top: 50px;
`;

const Home = () => {
	const isSaved = useSelector((state) => state.store.movieData);
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);
	const [nowPlaying, setNowPlaying] = useState([]);
	const [topRated, setTopRated] = useState([]);
	const [popular, setPopular] = useState([]);
	const [upComing, setUpComing] = useState([]);

	useEffect(() => {
		if (!isSaved) {
			dispatch(getMovieData()).then((res) => {
				setNowPlaying(res.payload.nowPlaying);
				setTopRated(res.payload.topRated);
				setPopular(res.payload.popular);
				setUpComing(res.payload.upComing);
				setIsLoading(false);
			});
		} else {
			setNowPlaying(isSaved.payload.nowPlaying);
			setTopRated(isSaved.payload.topRated);
			setPopular(isSaved.payload.popular);
			setUpComing(isSaved.payload.upComing);
			setIsLoading(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
					{nowPlaying?.length > 0 && (
						<Flicking
							zIndex={0}
							circular={true}
							duration={400}
							adaptive={true}
							renderExternal={true}
							renderOnlyVisible={true}
							autoResize={true}
							isEqualSize={true}
							collectStatistics={false}
							plugins={[new Fade(), new AutoPlay(2600, 'NEXT')]}
						>
							{RenderPanel(nowPlaying)}
						</Flicking>
					)}
					{popular?.length > 0 && RenderList('Popular', popular)}
					{topRated?.length > 0 && RenderList('Top Rated', topRated)}
					{upComing?.length > 0 && RenderList('UpComing', upComing)}
				</Container>
			)}
		</>
	);
};

export default Home;
