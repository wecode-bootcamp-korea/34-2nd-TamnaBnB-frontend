import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailsPicture from './components/DetailsPicture/DetailsPicture';
import DetailsReservation from './components/DetailsReservation/DetailsReservation';
import Review from './components/Review';
import DetailsMap from './components/DetailsMap';

import styled from 'styled-components';
const Details = () => {
  const params = useParams();

  const [roomDetailData, setRoomDetailData] = useState({});

  useEffect(() => {
    fetch(`http://52.79.248.152:8000/rooms/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setRoomDetailData(data.room_info);
      });
  }, []);

  if (Object.keys(roomDetailData).length === 0) return <>loading...</>;

  return (
    <Main>
      <DetailsPicture roomDetailData={roomDetailData} />
      <DetailsReservation roomDetailData={roomDetailData} />
      <Review />
      <DetailsMap />
    </Main>
  );
};

export default Details;

const Main = styled.main`
  width: 1120px;
  padding-top: 80px;
  margin: 0 auto;
  height: 300vh;
`;
