import React from 'react';
import styled from 'styled-components';
import './Loader.css';

const Container = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Loader = () => (
	<Container>
		<div className='sk-cube-grid'>
			<div className='sk-cube sk-cube1'></div>
			<div className='sk-cube sk-cube2'></div>
			<div className='sk-cube sk-cube3'></div>
			<div className='sk-cube sk-cube4'></div>
			<div className='sk-cube sk-cube5'></div>
			<div className='sk-cube sk-cube6'></div>
			<div className='sk-cube sk-cube7'></div>
			<div className='sk-cube sk-cube8'></div>
			<div className='sk-cube sk-cube9'></div>
		</div>
	</Container>
);

export default Loader;
