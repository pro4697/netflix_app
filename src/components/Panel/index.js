import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
	display: flex;
	position: relative;
	padding-left: calc(15%);
	height: 50vh;
	width: 100%;
	border: 0;
	@media screen and (max-width: 768px) {
		padding-left: calc(7%);
		height: 280px;
	}
`;

const BackDrop = styled.div`
	position: absolute;
	background: center/cover no-repeat;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	opacity: 0.4;
	background-image: ${(props) => props.img};
`;

const Content = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
`;

const Poster = styled.div`
	display: inline-block;
	overflow: hidden;
	justify-content: center;
	background: center/cover no-repeat;
	width: 100px;
	height: 160px;
	border-radius: 5px;
	background-image: ${(props) => props.img};
`;

const DataContainer = styled.div`
	margin-left: 50px;
	width: 50%;
	align-items: flex-start;
`;

const Title = styled.div`
	color: white;
	font-size: 20px;
	letter-spacing: 2px;
	margin-bottom: 10px;
`;

const Vote = styled.div`
	line-height: 20px;
	color: white;
	font-size: 13px;
	font-weight: 300;
	margin-bottom: 15px;
`;

const Icon = styled(FontAwesomeIcon)`
	color: #ffc83d;
	font-size: 10px;
	margin-right: 5px;
`;

const OverView = styled.div`
	color: rgb(220, 220, 220);
	font-size: 14px;
	letter-spacing: 2px;
	font-weight: 500;
	line-height: 18px;
`;

const Button = styled.div`
	text-decoration: none;
	margin-right: 0;
	display: inline-block;
	margin-top: 12px;
	background-color: #e74c3c;
	color: white;
	padding: 7px 10px;
	width: 100px;
	font-size: 14px;
	border-radius: 3px;
	text-align: center;

	@media screen and (max-width: 768px) {
		text-decoration: none;
		margin-right: 0;
		display: inline-block;
		margin-top: 12px;
		background-color: #e74c3c;
		color: white;
		padding: 7px 0;
		width: 85px;
		font-size: 12px;
		border-radius: 3px;
		text-align: center;
	}
`;

const Panel = ({ id, title, date, overview, poster, backdrop, vote }) => {
	return (
		<Container>
			{backdrop !== 'https://image.tmdb.org/t/p/w500null' ? (
				<BackDrop img={`url(${backdrop})`} />
			) : null}
			<Content>
				{poster !== 'https://image.tmdb.org/t/p/w500null' ? (
					<Poster img={`url(${poster})`} />
				) : null}
				<DataContainer>
					<Title>{title.slice(0, 40)}</Title>
					<Vote>
						<Icon icon={faStar} />
						<span> {vote} / 10</span>
					</Vote>
					<OverView>{overview.slice(0, 50)}...</OverView>
					<Link
						to={{
							pathname: '/movie-detail',
							state: { id, title, date, overview, poster, backdrop, vote },
						}}
					>
						<Button>View Detail</Button>
					</Link>
				</DataContainer>
			</Content>
		</Container>
	);
};

Panel.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	overview: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	backdrop: PropTypes.string.isRequired,
	vote: PropTypes.number.isRequired,
};

export default Panel;
