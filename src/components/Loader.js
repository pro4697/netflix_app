import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  color: white;
`;

const Loader = () => (
  <Container>
    <FontAwesomeIcon icon={faCog} size='3x' spin />
  </Container>
);

export default Loader;
