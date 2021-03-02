import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useReactRouter from 'use-react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
	display: flex;
	position: fixed;
	z-index: 1;
	justify-content: center;
	text-align: center;
	top: 0px;
	width: 100%;
	height: 50px;
	background-color: black;
	padding: 5px 20px;
`;

const BackBtn = styled.div`
	display: none;
	cursor: pointer;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	height: 50px;
	padding: 20px;
	margin: 0;
	@media screen and (max-width: 768px) {
		display: ${(props) => props.display};
	}
`;

const IconArrow = styled(FontAwesomeIcon)`
	color: grey;
	height: 40px;
	margin-top: -15px;
	margin-left: -5px;
	font-size: 20px;
	padding: 0;
`;

const Logo = styled.img`
	max-width: 120px;
	width: 100%;
`;

const NavTop = () => {
	const { location, history } = useReactRouter();
	const { pathname } = location;
	const [display, setDisplay] = useState('none');

	useEffect(() => {
		if (pathname === '/movie-detail') {
			setDisplay('block');
		} else {
			setDisplay('none');
		}
	}, [pathname]);

	return (
		<Container>
			<BackBtn
				display={display}
				onClick={() => {
					history.go(-1);
				}}
			>
				<IconArrow icon={faArrowLeft} />
			</BackBtn>
			<Link to='/'>
				<Logo src={process.env.PUBLIC_URL + '/netflix_logo.png'} alt='logo' />
			</Link>
		</Container>
	);
};

export default NavTop;
