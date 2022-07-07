import React, { useState } from 'react';
import Map from './Map';
import './MapList.css';
import Card from '../Main/components/Card';

const MapList = () => {
  return (
    <>
      <Map />
      <div className="toggleListWrapper">
        <div className="toggleList">{/* <Card /> */}</div>
      </div>
    </>
  );
};
