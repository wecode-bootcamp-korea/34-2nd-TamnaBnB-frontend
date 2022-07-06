import React from 'react';
import DetailsPicture from './components/DetailsPicture';
import DetailsReservation from './components/DetailsReservation/DetailsReservation';
import styled from 'styled-components';

const Main = styled.main`
  width: 1120px;
  padding-top: 80px;
  margin: 0 auto;
  height: 300vh;
`;

const Details = () => {
  return (
    <Main>
      <DetailsPicture />
      <DetailsReservation />
    </Main>
  );
};

export default Details;
