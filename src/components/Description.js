import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: inline-block;
  margin-top: 25px;
  width: 100%;
`;

const Title = styled.span`
  font-size: 14px;
  letter-spacing: 2px;
  padding-bottom: 5px;
  margin: 25px;
  font-weight: 600;
  color: white;
`;

const Body = styled.div`
  width: 100%;
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Body>{children}</Body>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
