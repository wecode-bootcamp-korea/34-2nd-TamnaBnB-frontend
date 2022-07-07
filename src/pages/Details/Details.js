import React from 'react';
import styled from 'styled-components';
import Review from './components/Review';
import DetailsMap from './components/DetailsMap';

const Details = () => {
  return (
    <Main>
      <Review />
      <DetailsMap />
    </Main>
  );
};

const Main = styled.main`
  width: 1120px;
  padding-top: 80px;
  margin: 0 auto;
`;

export default Details;
