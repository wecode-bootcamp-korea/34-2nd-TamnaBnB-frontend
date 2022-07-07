/*global kakao*/
import React, { useEffect, useRef } from 'react';

const Map = () => {
  const mapContainer = useRef();

  // <지도 렌더하기>
  useEffect(() => {
    let mapOption = {
      center: new kakao.maps.LatLng(33.450705, 126.570677), // 지도의 중심좌표
      level: 5, // 지도의 확대 레벨
      mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
    };

    // 지도를 생성한다
    let map = new kakao.maps.Map(mapContainer.current, mapOption);

    // 지도에 확대 축소 컨트롤을 생성한다
    let zoomControl = new kakao.maps.ZoomControl();

    // 지도의 우측에 확대 축소 컨트롤을 추가한다
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // 지도 영역 변화 이벤트를 등록한다
    let dragid;

    kakao.maps.event.addListener(map, 'bounds_changed', function () {
      clearTimeout(dragid);

      dragid = setTimeout(() => {
        let mapBounds = map.getBounds(),
          message =
            '지도의 남서쪽, 북동쪽 영역좌표는 ' +
            mapBounds.toString() +
            '입니다.';
        console.log(message); // POST 요청하기
      }, 500);
    });

    // 지도에 마커를 생성하고 표시한다
    let imageSrc =
      'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png'; // 마커이미지의 주소입니다

    for (let i = 0; i < positions.length; i++) {
      let imageSize = new kakao.maps.Size(24, 35); // 마커이미지의 크기입니다
      // 마커 이미지를 생성합니다
      let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });
    }

    // 마커에 클릭 이벤트를 등록한다 (우클릭 : rightclick)
    kakao.maps.event.addListener(marker, 'click', function () {
      alert('마커를 클릭했습니다!');
    });
  }, []);

  return (
    <div>
      <div
        id="map"
        ref={mapContainer}
        style={{ width: '100%', height: '100vh' }}
      />
    </div>
  );
};

export default Map;

// 마커를 표시할 위치와 title 객체 배열입니다
const positions = [
  {
    title: '카카오',
    latlng: new kakao.maps.LatLng(33.450705, 126.570677),
  },
  {
    title: '생태연못',
    latlng: new kakao.maps.LatLng(33.450936, 126.569477),
  },
  {
    title: '텃밭',
    latlng: new kakao.maps.LatLng(33.450879, 126.56994),
  },
  {
    title: '근린공원',
    latlng: new kakao.maps.LatLng(33.451393, 126.570738),
  },
];
