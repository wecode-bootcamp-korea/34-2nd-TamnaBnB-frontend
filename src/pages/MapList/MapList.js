import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MAP_LIST_API } from '../../../src/config';
import * as S from './MapList.style';
import MapRender from './components/MapRender';
import Card from '../../components/Card/Card';

const MapList = () => {
  const navigate = useNavigate();
  const { pageId } = useParams();
  const [roomData, setRoomData] = useState([]);
  const [totalPageNum, setTotalPageNum] = useState(0);
  const [show, setShow] = useState(true);
  const [hoverId, setHoverId] = useState();

  const arrowCount = e => {
    const { value } = e.target;

    if (value === 'leftBtn' && +pageId !== 1) {
      navigate(`/maplist/${+pageId - 1}`);
      return;
    }

    if (value === 'rightBtn' && +pageId !== 4) {
      navigate(`/maplist/${+pageId + 1}`);
      return;
    }
  };

  useEffect(() => {
    fetch('/data/homeList.json')
      // fetch(`${MAP_LIST_API.rooms}?offset=${(+pageId - 1) * 8}&limit=8`)
      .then(res => res.json())
      .then(result => {
        setTotalPageNum(25); // 서버에서 토탈 정보는 주지 않아 값을 바로 입력함
        setRoomData(result.room_list);
      });
  }, [pageId]);

  return (
    <S.MapWrapper>
      <S.ToggleListWrapper className={`${!show && 'hidden'}`}>
        <S.ToggleList>
          {roomData.map(data => (
            <S.CardWrapper
              key={data.id}
              id={data.id}
              onMouseEnter={e => {
                setHoverId(data.id);
              }}
              onMouseLeave={e => {
                setHoverId(null);
              }}
            >
              <Card
                id={data.id}
                name={data.name}
                description={data.description}
                price={data.price}
                bedCount={data.bed_count}
                rating={data.ratings_avg}
                imgs={data.room_images}
              />
            </S.CardWrapper>
          ))}
        </S.ToggleList>
        <S.PageCount>
          <S.ArrowBtn type="button" value="leftBtn" onClick={arrowCount}>
            <i className="fas fa-chevron-left" />
          </S.ArrowBtn>
          {Array(Math.ceil(totalPageNum / 8))
            .fill('_')
            .map((_, idx) => (
              <S.LinkEl
                to={`/maplist/${idx + 1}`}
                key={idx}
                className={idx + 1 === +pageId ? 'clicked' : ''}
              >
                {idx + 1}
              </S.LinkEl>
            ))}
          <S.ArrowBtn type="button" value="rightBtn" onClick={arrowCount}>
            <i className="fas fa-chevron-right" />
          </S.ArrowBtn>
        </S.PageCount>
      </S.ToggleListWrapper>
      <MapRender
        hoverId={hoverId}
        roomData={roomData}
        show={show}
        setShow={setShow}
      />
    </S.MapWrapper>
  );
};

export default MapList;
