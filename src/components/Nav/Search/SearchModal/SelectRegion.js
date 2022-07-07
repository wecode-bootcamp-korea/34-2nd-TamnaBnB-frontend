import React from 'react';
import styled from 'styled-components';

const SelectRegion = ({ closeWhereModal, setClickedCity }) => {
  const jejuClicked = () => {
    setClickedCity('제주시');
    closeWhereModal();
  };
  const seogwipoClicked = () => {
    setClickedCity('서귀포시');
    closeWhereModal();
  };

  return (
    <>
      <ModalOutside onClick={closeWhereModal} />
      <SelectWrapper onClick={e => e.stopPropagation()}>
        <JejuCity onClick={jejuClicked}>제주시</JejuCity>
        <SeogwipoCity onClick={seogwipoClicked}>서귀포시</SeogwipoCity>
      </SelectWrapper>
    </>
  );
};
const ModalOutside = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;
const SelectWrapper = styled.div`
  position: absolute;
  left: 27%;
  top: 22.4%;
  width: 200px;
  height: 100px;
  background-color: white;
  border-radius: 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  z-index: 100;
`;
const JejuCity = styled.button`
  ${({ theme }) => theme.variables.btnTransparent}
  width: 100%;
  height: 50%;
  font-size: 16px;
  border-radius: 15px 15px 0 0;
  &:hover {
    background-color: #ebebeb;
  }
`;
const SeogwipoCity = styled(JejuCity)`
  border-top: 1px solid #ddd;
  border-radius: 0 0 15px 15px;
`;
export default SelectRegion;