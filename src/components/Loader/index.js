import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const CubeGrid = styled.div`
	width: 70px;
	height: 70px;
	margin: 100px auto;
	@media (max-width: 768px) {
		width: 50px;
		height: 50px;
	}
`;

const CubeGridScaleDelay = keyframes`
	0%,
	70%,
	100% {
		-webkit-transform: scale3D(1, 1, 1);
		transform: scale3D(1, 1, 1);
	}
	35% {
		-webkit-transform: scale3D(0, 0, 1);
		transform: scale3D(0, 0, 1);
	}
`;

const Cube = styled.div`
	width: 33%;
	height: 33%;
	background-color: white;
	float: left;
	-webkit-animation: ${CubeGridScaleDelay} 1.3s infinite ease-in-out;
	animation: ${CubeGridScaleDelay} 1.3s infinite ease-in-out;
`;

const Cube1 = styled(Cube)`
	-webkit-animation-delay: 0.2s;
	animation-delay: 0.2s;
	background-color: #ff6666;
`;

const Cube2 = styled(Cube)`
	-webkit-animation-delay: 0.3s;
	animation-delay: 0.3s;
	background-color: #ff3333;
`;

const Cube3 = styled(Cube)`
	-webkit-animation-delay: 0.4s;
	animation-delay: 0.4s;
	background-color: #ff0000;
`;

const Cube4 = styled(Cube)`
	-webkit-animation-delay: 0.1s;
	animation-delay: 0.1s;
	background-color: #ffaaaa;
`;

const Cube5 = styled(Cube)`
	-webkit-animation-delay: 0.2s;
	animation-delay: 0.2s;
	background-color: #ff6666;
`;

const Cube6 = styled(Cube)`
	-webkit-animation-delay: 0.3s;
	animation-delay: 0.3s;
	background-color: #ff3333;
`;

const Cube7 = styled(Cube)`
	-webkit-animation-delay: 0s;
	animation-delay: 0s;
`;

const Cube8 = styled(Cube)`
	-webkit-animation-delay: 0.1s;
	animation-delay: 0.1s;
	background-color: #ffaaaa;
`;

const Cube9 = styled(Cube)`
	-webkit-animation-delay: 0.2s;
	animation-delay: 0.2s;
	background-color: #ff6666;
`;

const Loader = () => (
	<Container>
		<CubeGrid>
			<Cube1 />
			<Cube2 />
			<Cube3 />
			<Cube4 />
			<Cube5 />
			<Cube6 />
			<Cube7 />
			<Cube8 />
			<Cube9 />
		</CubeGrid>
	</Container>
);

export default Loader;
