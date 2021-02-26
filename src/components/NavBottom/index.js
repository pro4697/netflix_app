import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useReactRouter from 'use-react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faTv, faSearch } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
	opacity: 0.85;
	margin: auto;
	z-index: 1;
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 40px;
	display: flex;
	background-color: black;
	padding: 0 20px;
	padding-top: -15px;
`;

const CLink = styled(Link)`
	margin: auto;
`;

const Icon = styled(FontAwesomeIcon)`
	font-size: 20px;
	color: ${(props) => props.color};
`;

const NavBottom = () => {
	const { location } = useReactRouter();
	const { pathname } = location;
	const [color, setColor] = useState(['darkgrey', 'darkgrey', 'darkgrey']);

	useEffect(() => {
		if (pathname === '/') {
			setColor(['white', 'darkgrey', 'darkgrey']);
		} else if (pathname === '/tv') {
			setColor(['darkgrey', 'white', 'darkgrey']);
		} else if (pathname === '/search') {
			setColor(['darkgrey', 'darkgrey', 'white']);
		}
	}, [pathname]);

	return (
		<Container>
			<CLink to='/'>
				<Icon icon={faFilm} color={color[0]} />
			</CLink>
			<CLink to='/tv'>
				<Icon icon={faTv} color={color[1]} />
			</CLink>
			<CLink to='/search'>
				<Icon icon={faSearch} color={color[2]} />
			</CLink>
		</Container>
	);
};

export default NavBottom;
