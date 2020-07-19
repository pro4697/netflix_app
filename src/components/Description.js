import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: block;
  margin-top: 25px;
  padding: 0;
  width: 100%;
`;

const Title = styled.span`
  font-size: 15px;
  letter-spacing: 2px;
  padding-bottom: 2px;
  margin-top: 25px;
  margin-left: -4px;
  text-align: left;
  font-weight: 600;
  color: lightgray;
  border-bottom: 1px solid grey;
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: block;
  font-size: 15px;
  text-decoration: none;
  letter-spacing: 2px;
  // margin-left: 10px;
  color: lightgray;
  margin-top: 5px;
  margin-bottom: 7px;
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const Description = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Body>{children}</Body>
  </Container>
);

Description.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Description;
