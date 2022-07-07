/*global kakao*/
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const DetailsMap = () => {
  const mapId = useRef();

  useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(33.242565, 126.553494),
      level: 3,
    };

    const map = new kakao.maps.Map(mapId.current, options);
    const markerPosition = new kakao.maps.LatLng(33.242565, 126.553494);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <div>
      <DetailsMapArea>
        <DetailsMapSection>
          <DetailsMapTitle>
            <DetailsMapTitleTxt>호스팅지역</DetailsMapTitleTxt>
          </DetailsMapTitle>
          <DetailsMapDiv ref={mapId} />
          <DetailsLocation>
            <DetailsLocationTxt>Jeju-si, 제주도, 한국</DetailsLocationTxt>
            <DetailsLocationTxtEx>
              게으른 노을 인근에는 금오름 10분 패러글라이딩장 10분 애월한담해변
              10분 등 주변에 많은 관광지가 있으며, 유명 소품샵과 맛집, 카페들도
              많이 있습니다.
            </DetailsLocationTxtEx>
          </DetailsLocation>
        </DetailsMapSection>
      </DetailsMapArea>
    </div>
  );
};

const DetailsMapArea = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 48px;
`;

const DetailsMapSection = styled.section`
  padding-bottom: 48px;
  border-bottom: 1px solid #dfdfdf;
`;

const DetailsMapTitle = styled.div`
  margin-bottom: 12px;
`;

const DetailsMapTitleTxt = styled.h3`
  margin-bottom: 30px;
  font-size: 25px;
`;

const DetailsMapDiv = styled.div`
  height: 450px;
  margin-bottom: 30px;
`;

const DetailsLocation = styled.div`
  height: 20px;
  margin-bottom: 48px;
`;

const DetailsLocationTxt = styled.p`
  margin-bottom: 20px;
  background-color: white;
`;

const DetailsLocationTxtEx = styled.p`
  font-size: 14px;
`;

export default DetailsMap;
