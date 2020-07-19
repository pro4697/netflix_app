import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: block;
  margin-top: 25px;
  width: 100%;
`;

const Title = styled.span`
  font-size: 16px;
  letter-spacing: 2px;
  padding-bottom: 5px;
  margin: 25px;
  font-weight: 600;
  color: white;
  border-bottom: 1px solid grey;
`;

const Body = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-gap: 35px;
  padding-top: 20px;
  padding-right: 30px;
  margin-bottom: 40px;
  margin-left: 5px;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: inline-flex;
    grid-gap: 0;
    padding-left: 5px;
    margin-bottom: 20px;
    margin-left: 0;
    white-space: nowrap;
    overflow-x: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
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
