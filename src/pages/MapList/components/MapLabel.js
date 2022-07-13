import React from 'react';
import * as S from './MapLabel.style';

const MapLabel = ({ hoverId, roomDataObj, setClickedLabelId }) => {
  const isLabelClicked = e => {
    setClickedLabelId(e.target.id);
  };

  return (
    <S.LaberWrapper>
      <S.Label
        id={roomDataObj.id}
        className={hoverId === roomDataObj.id && 'hoverLabel'}
        onClick={isLabelClicked}
      >
        {Number(roomDataObj.price).toLocaleString('ko-KR', {
          style: 'currency',
          currency: 'KRW',
        })}
      </S.Label>
    </S.LaberWrapper>
  );
};

export default MapLabel;
