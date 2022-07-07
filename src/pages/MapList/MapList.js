import React, { useState } from 'react';
import Map from './Map';
import './MapList.css';

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

export default MapList;
