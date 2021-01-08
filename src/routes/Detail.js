import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { movieApi, tvApi } from '../Api';
import { formatDate } from '../utils';
import Description from '../components/Description';
import NoImg from '../imgs/no_img.png';
import './Detail.css';

const page = {
	in: {
		opacity: 1,
		y: 0,
	},
	out: {
		opacity: 0,
		y: '10vh',
	},
};

class Detail extends React.Component {
	state = {
		isTv: false,
		genres: [],
		results: [],
		runtime: null,
		last_date: null,
		episodes: null,
		seasons: null,
	};

	async componentDidMount() {
		const { location } = this.props;
		if (location.state === undefined) {
			window.location.href = '/netflix_app';
		}

		if (!location.state.isTv) {
			// 영화 추가데이터 가져오기
			const {
				data: { genres, runtime },
			} = await movieApi.getDetail(location.state.id);

			const {
				data: { results },
			} = await movieApi.getVideos(location.state.id);
			this.setState({ genres, runtime, results, isTv: location.state.isTv });
		} else {
			// 드라마 추가데이터 가져오기
			const {
				data: {
					genres,
					episode_run_time: runtime,
					last_air_date: last_date,
					number_of_episodes: episodes,
					number_of_seasons: seasons,
				},
			} = await tvApi.getDetail(location.state.id);

			const {
				data: { results },
			} = await tvApi.getVideos(location.state.id);
			this.setState({
				genres,
				runtime,
				last_date,
				episodes,
				seasons,
				results,
				isTv: location.state.isTv,
			});
		}
	}

	render() {
		window.scrollTo(0, 0);
		const { location, history } = this.props;
		const { genres, runtime, last_date, results, episodes, seasons, isTv } = this.state;

		if (location.state) {
			const overview = location.state.overview.split('. '); // 문단별로 자르고 마침표를 찍기
			for (let i = 0; i < overview.length - 1; i++) {
				overview[i] += '.';
			}

			return (
				<motion.div initial='out' animate='in' exit='out' variants={page} className='detail'>
					<Link
						to=''
						onClick={() => {
							history.goBack();
						}}
					>
						<div className='nav__container'>
							<FontAwesomeIcon icon={faArrowLeft} className='nav__backbtn' />
						</div>
					</Link>
					{location.state.backdrop !== 'https://image.tmdb.org/t/p/w500null' ? (
						<div className='detail__backdrop' style={{ backgroundImage: `url(${location.state.backdrop})` }} />
					) : null}

					<br />
					<div className='detail__container'>
						<picture>
							<img
								src={location.state.poster}
								alt={location.state.title}
								onError={(e) => {
									e.target.onerror = null;
									e.target.src = NoImg;
								}}
								className='detail__poster'
								style={{ objectFit: 'cover' }}
							/>
						</picture>
						<div className='detail__info'>
							<div className='detail__title'>{location.state.title}</div>
							<div className='detail__title star'>
								<FontAwesomeIcon icon={faStar} className='panel__star' />
								<span> {location.state.vote} / 10</span>
							</div>
							<div className='detail__description'>
								<Description title={isTv ? '첫 방영일자' : '개봉'}>
									{formatDate(location.state.date || '0000-00-00')}
								</Description>
								{isTv ? <Description title='최신 방영일자'>{formatDate(last_date || '0000-00-00')}</Description> : null}
								<Description title='장르'>
									{genres.map((g, idx) => (idx + 1 === genres.length ? g.name : `${g.name}•`))}
								</Description>
								<Description title='시간'>{runtime}분</Description>
								{isTv ? (
									<Description title='에피소드 / 시즌'>
										{episodes} / {seasons}
									</Description>
								) : null}
								<Description title='줄거리'>
									{overview.map((o, idx) => (
										<p key={idx}>{o}</p>
									))}
								</Description>
								{results.length > 0 ? (
									<Description title='관련 영상'>
										{results.map((video, idx) => (
											<a
												href={`https://www.youtube.com/watch?v=${video.key}`}
												className='detail__videoContainer'
												key={idx}
											>
												<FontAwesomeIcon icon={faYoutube} className='youtube' />
												<div className='detail__videoName'>{video.name}</div>
											</a>
										))}
									</Description>
								) : null}
								<br />
								<br />
							</div>
						</div>
					</div>
				</motion.div>
			);
		} else {
			return null;
		}
	}
}
export default Detail;
