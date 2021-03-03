import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { movieApi, tvApi } from '../../common/api';
import { formatDate } from '../../common/utils';
import Section from '../../components/Description';

const PageAnimation = {
	in: {
		opacity: 1,
		y: 0,
	},
	out: {
		opacity: 0,
		y: '10vh',
	},
};

const Container = styled(motion.div)`
	position: relative;
	height: calc(100vh - 50px);
	width: 100%;
	padding-top: 50px;
	& p {
		line-height: 20px;
		margin-top: 0;
	}
`;

const BackDrop = styled.div`
	position: absolute;
	background: center/cover no-repeat;
	background-image: ${(props) => props.img};
	opacity: 0.5;
	top: 50px;
	width: 100%;
	height: 100%;
	z-index: -1;
	filter: blur(5px);
	-webkit-filter: blur(5px);
	@media screen and (max-width: 768px) {
		top: 50px;
		height: 280px;
		filter: blur(0);
		-webkit-filter: blur(0);
	}
`;

const DataContainer = styled.div`
	display: flex;
	width: 100%;
	position: relative;
	height: 100%;
	padding: 0 50px;
	@media screen and (max-width: 768px) {
		padding-left: 30px;
		padding-right: 15px;
	}
`;

const Poster = styled.img`
	width: 100%;
	background-size: cover;
	height: 100%;
	background-position: center center;
	border-radius: 15px;
	object-fit: cover;
	@media screen and (max-width: 768px) {
		position: absolute;
		margin-top: 80px;
		width: 140px;
		height: 224px;
	}
`;

const Info = styled.div`
	width: 70%;
	height: 70%;
	margin-left: 10px;
	color: white;
	@media screen and (max-width: 768px) {
		margin-top: 100px;
		display: block;
		justify-content: center;
		width: 100%;
		margin-bottom: -100px;
	}
`;

const Title = styled.div`
	display: flex;
	letter-spacing: 35px;
	padding-top: 15px;
	padding-left: 5vw;
	font-size: 30px;
	letter-spacing: 3px;
	@media screen and (max-width: 768px) {
		display: block;
		font-size: 24px;
		letter-spacing: 3px;
		margin-left: 120px;
		color: white;
		margin-top: 55px;
		margin-bottom: 7px;
	}
`;

const Score = styled(Title)`
	padding-top: 25px;
	color: lightgray;
	font-size: 13px;
	font-weight: 100;
	letter-spacing: 1px;
	@media screen and (max-width: 768px) {
		font-size: 12px;
		color: lightgray;
		margin-top: 15px;
		margin-bottom: 5px;
		letter-spacing: 1px;
	}
`;

const IconStar = styled(FontAwesomeIcon)`
	color: yellow;
	margin-right: 8px;
	@media screen and (max-width: 768px) {
		margin-right: 3px;
	}
`;

const Description = styled.div`
	display: inline-block;
	width: 90%;
	max-width: 550px;
	padding-left: 5vw;
	margin-top: 30px;
	margin-left: 5px;
	letter-spacing: 3px;
	@media screen and (max-width: 768px) {
		display: block;
		width: 95%;
		margin-left: 0px;
		padding: 0px;
		letter-spacing: 3px;
		float: left;
	}
`;

const IconYoutube = styled(FontAwesomeIcon)`
	display: flex;
	float: left;
	height: 100%;
	font-size: 22px;
`;

const A = styled.a`
	color: lightgray;
	text-decoration: none;
	margin-bottom: 5px;
	margin-top: 7px;
	display: flex;
	align-items: center;
`;

const VideoName = styled.div`
	display: flex;
	width: 100%;
	margin-left: 10px;
`;

const Detail = (props) => {
	const { location } = props;
	const [isTv, setIsTv] = useState(false);
	const [genres, setGenres] = useState([]);
	const [results, setResults] = useState([]);
	const [runtime, setRuntime] = useState(null);
	const [lastDate, setLastDate] = useState(null);
	const [episodes, setEpisodes] = useState(null);
	const [seasons, setSeasons] = useState(null);

	useEffect(() => {
		if (location.state === undefined) {
			window.location.href = '/netflix_app';
		}

		const getData = async () => {
			if (!location.state.isTv) {
				const {
					data: { genres, runtime },
				} = await movieApi.getDetail(location.state.id);

				const {
					data: { results },
				} = await movieApi.getVideos(location.state.id);
				setGenres(genres);
				setRuntime(runtime);
				setResults(results);
				setIsTv(location.state.isTv);
			} else {
				const {
					data: {
						genres,
						episode_run_time: runtime,
						last_air_date: lastDate,
						number_of_episodes: episodes,
						number_of_seasons: seasons,
					},
				} = await tvApi.getDetail(location.state.id);

				const {
					data: { results },
				} = await tvApi.getVideos(location.state.id);
				setGenres(genres);
				setRuntime(runtime);
				setLastDate(lastDate);
				setEpisodes(episodes);
				setSeasons(seasons);
				setResults(results);
				setIsTv(location.state.isTv);
			}
		};

		getData();
	}, [location.state]);

	// window.scrollTo(0, 0);

	if (location.state) {
		const overview = location.state.overview.split('. '); // 문단별로 자르고 마침표를 찍기
		for (let i = 0; i < overview.length - 1; i++) {
			overview[i] += '.';
		}

		return (
			<Container initial='out' animate='in' exit='out' variants={PageAnimation}>
				{location.state.backdrop !== 'https://image.tmdb.org/t/p/w500null' ? (
					<BackDrop img={`url(${location.state.backdrop})`} />
				) : null}

				<br />
				<DataContainer>
					<picture>
						<Poster
							src={location.state.poster}
							alt={location.state.title}
							onError={(e) => {
								e.target.onerror = null;
								e.target.src = process.env.PUBLIC_URL + '/no_img.png';
							}}
						/>
					</picture>
					<Info>
						<Title>{location.state.title}</Title>
						<Score>
							<IconStar icon={faStar} />
							<span> {location.state.vote} / 10</span>
						</Score>
						<Description>
							<Section title={isTv ? '첫 방영일자' : '개봉'}>
								{formatDate(location.state.date || '0000-00-00')}
							</Section>
							{isTv ? (
								<Section title='최신 방영일자'>{formatDate(lastDate || '0000-00-00')}</Section>
							) : null}
							<Section title='장르'>
								{genres.map((g, idx) => (idx + 1 === genres.length ? g.name : `${g.name}•`))}
							</Section>
							<Section title='시간'>{runtime}분</Section>
							{isTv ? (
								<Section title='에피소드 / 시즌'>
									{episodes} / {seasons}
								</Section>
							) : null}
							<Section title='줄거리'>
								{overview.map((o, idx) => (
									<p key={idx}>{o}</p>
								))}
							</Section>
							{results.length > 0 ? (
								<Section title='관련 영상'>
									{results.map((video, idx) => (
										<A href={`https://www.youtube.com/watch?v=${video.key}`} key={idx}>
											<IconYoutube icon={faYoutube} />
											<VideoName>{video.name}</VideoName>
										</A>
									))}
								</Section>
							) : null}
							<br />
							<br />
						</Description>
					</Info>
				</DataContainer>
			</Container>
		);
	} else {
		return null;
	}
};

export default Detail;
