import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Poster = styled.img`
	overflow: hidden;
	width: 100px;
	height: 160px;
	margin-bottom: 0;
	border-radius: 5px;
`;

const Container = styled.div`
	position: relative;
	display: inline-block;
	width: 100px;
	height: 195px;
	color: #adaeb9;
	margin-left: 20px;
	padding-right: -20px;
	transition: all 300ms ease-out;
	border-radius: 5px;
	&:hover ${Poster} {
		opacity: 0.7;
		transition: all 300ms ease-out;
	}
	& a {
		text-decoration: none;
		color: inherit;
	}
`;

const Data = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100px;
	margin-top: 0;
	padding-top: auto;
`;

const Title = styled.h3`
	white-space: nowrap;
	overflow: hidden;
	position: absolute;
	width: 100%;
	bottom: 0;
	padding-bottom: 0;
	margin-bottom: 16px;
	letter-spacing: 1px;
	font-weight: 400;
	text-align: left;
	font-size: 13px;
	color: white;
`;

const Year = styled.div`
	position: absolute;
	bottom: 0;
	float: left;
	font-size: 11px;
	letter-spacing: 1px;
	justify-content: left;
	text-align: left;
`;

const Vote = styled.div`
	position: absolute;
	bottom: 0;
	float: right;
	right: 0;
	font-size: 12px;
	justify-content: right;
	text-align: right;
`;

const Icon = styled(FontAwesomeIcon)`
	color: #ffc83d;
	font-size: 8px;
	margin-bottom: 1px;
	margin-right: 5px;
`;

const Movie = ({ id, title, date, overview, poster, backdrop, vote, isTv }) => {
	if (date === undefined) date = '0000-00-00';
	// 영어 21 한글 10

	return (
		<Container>
			<Link
				to={{
					pathname: '/movie-detail',
					state: {
						id,
						title,
						date,
						overview,
						poster,
						backdrop,
						vote,
						isTv,
					},
				}}
			>
				<picture>
					{poster !== 'https://image.tmdb.org/t/p/w500null' ? (
						<Poster
							src={poster}
							alt={title}
							onError={(e) => {
								e.target.onerror = null;
								e.target.src = process.env.PUBLIC_URL + '/no_img.png';
							}}
							style={{ objectFit: 'cover' }}
						/>
					) : (
						<Poster
							src={process.env.PUBLIC_URL + '/no_img.png'}
							alt={title}
							style={{ objectFit: 'cover' }}
						/>
					)}
				</picture>
				<Data>
					<Title>{title}</Title>
					<Year>{date.slice(0, 4)}</Year>
					<Vote>
						<Icon icon={faStar} />
						{vote}
					</Vote>
				</Data>
			</Link>
		</Container>
	);
};

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	overview: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	backdrop: PropTypes.string.isRequired,
	vote: PropTypes.number.isRequired,
	isTv: PropTypes.bool.isRequired,
};

export default Movie;
