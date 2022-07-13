import React, { useState, useEffect, useRef } from 'react';
import { Map, CustomOverlayMap } from 'react-kakao-maps-sdk';
import Card from '../../../components/Card/Card';
import MapLabel from './MapLabel';
import * as S from './MapRender.style';

const MapRender = ({ hoverId, show, setShow, roomData }) => {
  const mapRef = useRef();
  const dragId = useRef();

  const [clickedLabelId, setClickedLabelId] = useState(null);
  //  TODO : 추가기능 구현
  const [position, setPosition] = useState({
    sw: '',
    ne: '',
  });
  const [style, setStyle] = useState({
    width: '100%',
    height: 'calc(100vh - 100px)',
  });

  const clickedData = clickedLabelId
    ? roomData.find(data => +data.id === +clickedLabelId)
    : null;

  const onClickToggle = () => {
    setShow(prev => !prev);
  };

  // <지도 너비 조절>
  useEffect(() => {
    if (show) {
      setStyle(prev => ({ ...prev, width: '100%' }));
    } else {
      setStyle(prev => ({ ...prev, width: '100vw' }));
    }
  }, [show]);

  // < 지도 너비 조정시, 리레이아웃 하기 >
  useEffect(() => {
    const map = mapRef.current;
    if (map) map.relayout();
  }, [style]);

  return (
    <S.Map>
      <Map
        onClick={() => setClickedLabelId(null)}
        ref={mapRef}
        center={{ lat: 33.389355, lng: 126.535527 }}
        style={style}
        level={10}
        onBoundsChanged={map => {
          // TODO : 추가기능 구현
          clearTimeout(dragId.current);

          dragId.current = setTimeout(() => {
            setPosition(() => {
              //  fetch("")
              return {
                sw: map.getBounds().getSouthWest().toString(),
                ne: map.getBounds().getNorthEast().toString(),
              };
            });
          }, 500);
        }}
      >
        {roomData.map(data => (
          <CustomOverlayMap // 커스텀 오버레이를 표시할 Container
            key={data.id}
            position={{
              lat: data.latitude,
              lng: data.longitude,
            }}
            xAnchor={0.3}
            yAnchor={0.91}
          >
            <MapLabel
              hoverId={hoverId}
              roomDataObj={data}
              setClickedLabelId={setClickedLabelId}
            />
          </CustomOverlayMap>
        ))}
        {clickedData && (
          <CustomOverlayMap // 커스텀 오버레이를 표시할 Container
            position={{
              lat: clickedData.latitude,
              lng: clickedData.longitude,
            }}
            xAnchor={0.4}
            yAnchor={1.1}
          >
            <div style={{ backgroundColor: 'white', padding: '8px' }}>
              <Card
                key={clickedData.id}
                id={clickedData.id}
                name={clickedData.name}
                description={clickedData.description}
                price={clickedData.price}
                bedCount={clickedData.bed_count}
                rating={clickedData.ratings_avg}
                imgs={clickedData.room_images}
              />
            </div>
          </CustomOverlayMap>
        )}
      </Map>
      <S.ToggleBtn onClick={onClickToggle}>
        {show ? (
          <i className="fas fa-angle-left" />
        ) : (
          <i className="fas fa-angle-right" />
        )}
      </S.ToggleBtn>
    </S.Map>
  );
};

export default MapRender;
