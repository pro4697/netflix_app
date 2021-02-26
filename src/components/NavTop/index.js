import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const Logo = styled.img`
	max-width: 120px;
	width: 100%;
`;

const NavTop = () => {
	return (
		<Container>
			<Link to='/'>
				<Logo src={process.env.PUBLIC_URL + '/netflix_logo.png'} alt='logo' />
			</Link>
		</Container>
	);
};

export default NavTop;
