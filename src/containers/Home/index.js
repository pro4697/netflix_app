import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import F from '@egjs/react-flicking';
import { Fade, AutoPlay } from '@egjs/flicking-plugins';
import { motion } from 'framer-motion';
import Loader from '../../components/Loader';
import { RenderList, RenderPanel } from '../../utils';

import { getMovieData } from '../../_actions/action';

const Container = styled(motion.div)`
	overflow-x: hidden;
	padding-bottom: 40px;
`;

const Flicking = styled(F)`
	margin-top: 50px;
`;

const Home = () => {
	const [state, setState] = useState({
		isLoading: true,
		nowPlaying: [],
		topRated: [],
		popular: [],
		upComing: [],
	});

	const isSaved = useSelector((state) => state.store.movieData);
	const dispatch = useDispatch();

	useEffect(() => {
		const getData = async () => {
			if (!isSaved) {
				// 처음 Movie탭으로 접속시 JSON 받아옴
				dispatch(getMovieData()).then((res) => {
					setState({
						isLoading: false,
						nowPlaying: res.payload.nowPlaying,
						topRated: res.payload.topRated,
						popular: res.payload.popular,
						upComing: res.payload.upComing,
					});
				});
			} else {
				// 이후 재접속시 Redux에서 가져옴
				setState({
					isLoading: false,
					nowPlaying: isSaved.payload.nowPlaying,
					topRated: isSaved.payload.topRated,
					popular: isSaved.payload.popular,
					upComing: isSaved.payload.upComing,
				});
			}
		};

		getData();
	}, [isSaved, dispatch]);

	const { isLoading, nowPlaying, topRated, popular, upComing } = state;
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
