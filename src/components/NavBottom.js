import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useReactRouter from 'use-react-router';
import './NavBottom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faTv, faSearch } from '@fortawesome/free-solid-svg-icons';

const NavBottom = () => {
	const { location } = useReactRouter();
	const { pathname } = location;
	const [color, setColor] = useState(['white', null, null]);

	useEffect(() => {
		if (pathname === '/') {
			setColor(['white', null, null]);
		} else if (pathname === '/tv') {
			setColor([null, 'white', null]);
		} else if (pathname === '/search') {
			setColor([null, null, 'white']);
		}
	}, [pathname]);

	return (
		<div className='nav__bottom'>
			<div className='nav__bottom__content'>
				<Link to='/'>
					<FontAwesomeIcon icon={faFilm} className='nav__icon' style={{ color: color[0] }} />
				</Link>
			</div>
			<div className='nav__bottom__content'>
				<Link to='/tv'>
					<FontAwesomeIcon icon={faTv} className='nav__icon' style={{ color: color[1] }} />
				</Link>
			</div>
			<div className='nav__bottom__content'>
				<Link to='/search'>
					<FontAwesomeIcon icon={faSearch} className='nav__icon' style={{ color: color[2] }} />
				</Link>
			</div>
		</div>
	);
};

export default NavBottom;
