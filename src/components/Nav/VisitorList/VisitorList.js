import React from 'react';
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from 'react-icons/io';
import styled from 'styled-components';
import { MdCancel } from 'react-icons/md';

const VisitorList = ({
  adultCount,
  childrenCount,
  infantCount,
  petCount,
  addAdultCount,
  removeAdultCount,
  addChildrenCount,
  removeChildrenCount,
  addInfantCount,
  removeInfantCount,
  addPetCount,
  removePetCount,
  resetSelection,
}) => {
  return (
    <>
      <VisitorBox>
        <VisitorInfoWrapper>
          <RestBtn onClick={resetSelection}>
            <RestIcon />
          </RestBtn>
          <AgeInfo>
            성인
            <Age>만13세 이상</Age>
          </AgeInfo>
        </VisitorInfoWrapper>
        <CountBox>
          <MinusBtn onClick={removeAdultCount} disabled={adultCount === 0}>
            <MinusIcon />
          </MinusBtn>
          <CountVisitors>{adultCount}</CountVisitors>
          <PlusBtn
            onClick={addAdultCount}
            disabled={childrenCount + adultCount === 16}
          >
            <PlusIcon />
          </PlusBtn>
        </CountBox>
      </VisitorBox>
      <VisitorBox>
        <VisitorInfoWrapper>
          <AgeInfo>
            어린이
            <Age>만 2~12세</Age>
          </AgeInfo>
        </VisitorInfoWrapper>
        <CountBox>
          <MinusBtn
            onClick={removeChildrenCount}
            disabled={childrenCount === 0}
          >
            <MinusIcon />
          </MinusBtn>
          <CountVisitors>{childrenCount}</CountVisitors>
          <PlusBtn
            onClick={addChildrenCount}
            disabled={childrenCount + adultCount === 16}
          >
            <PlusIcon />
          </PlusBtn>
        </CountBox>
      </VisitorBox>
      <VisitorBox>
        <VisitorInfoWrapper>
          <AgeInfo>
            유아
            <Age>만 2세 미만</Age>
          </AgeInfo>
        </VisitorInfoWrapper>
        <CountBox>
          <MinusBtn onClick={removeInfantCount} disabled={infantCount === 0}>
            <MinusIcon />
          </MinusBtn>
          <CountVisitors>{infantCount}</CountVisitors>
          <PlusBtn onClick={addInfantCount} disabled={infantCount === 5}>
            <PlusIcon />
          </PlusBtn>
        </CountBox>
      </VisitorBox>
      <VisitorBox>
        <VisitorInfoWrapper>
          <AgeInfo>
            반려동물
            <Age>보조동물을 동반하시나요?</Age>
          </AgeInfo>
        </VisitorInfoWrapper>
        <CountBox>
          <MinusBtn onClick={removePetCount} disabled={petCount === 0}>
            <MinusIcon />
          </MinusBtn>
          <CountVisitors>{petCount}</CountVisitors>
          <PlusBtn onClick={addPetCount} disabled={petCount === 5}>
            <PlusIcon />
          </PlusBtn>
        </CountBox>
      </VisitorBox>
    </>
  );
};
const VisitorBox = styled.div`
  ${({ theme }) => theme.variables.flex()}
  margin: 0 auto;
  width: 90%;
  height: 25%;
  border-bottom: 1px solid #ededed;
`;
const VisitorInfoWrapper = styled.div`
  ${({ theme }) => theme.variables.flex('', 'flex-start', 'center')}
  width: 50%;
  height: 90%;
`;
const RestBtn = styled.button`
  position: fixed;
  cursor: pointer;
  right: 500px;
  top: 99px;
  width: 35px;
  height: 35px;
  ${({ theme }) => theme.variables.btnTransparent}
  ${({ theme }) => theme.variables.flex()}
`;
const RestIcon = styled(MdCancel)`
  font-size: 35px;
  color: gray;
`;
const AgeInfo = styled.div`
  font-size: 15px;
  font-weight: bold;
`;
const Age = styled.p`
  margin-top: 8px;
  font-size: 13px;
  color: gray;
`;
const CountBox = styled(VisitorInfoWrapper)`
  ${({ theme }) => theme.variables.flex('', 'flex-end', 'center')}
`;
const MinusBtn = styled.button`
  ${({ theme }) => theme.variables.btnTransparent}
  cursor: pointer;
  color: gray;

  &:disabled {
    cursor: not-allowed;
    color: #ededed;
  }
`;
const MinusIcon = styled(IoIosRemoveCircleOutline)`
  width: 30px;
  height: 30px;
`;
const CountVisitors = styled.div`
  padding: 0 10px;
  font-weight: bold;
`;
const PlusBtn = styled.button`
  ${({ theme }) => theme.variables.btnTransparent}

  cursor: pointer;
  color: gray;

  &:disabled {
    cursor: not-allowed;
    color: #ededed;
  }
`;
const PlusIcon = styled(IoIosAddCircleOutline)`
  width: 30px;
  height: 30px;
`;
export default VisitorList;
