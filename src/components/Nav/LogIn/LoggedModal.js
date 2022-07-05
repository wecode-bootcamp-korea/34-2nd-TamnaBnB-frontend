import React from 'react';
import styled from 'styled-components';
import OpenMyPage from './OpenMyPage';

const LoggedModal = ({ closeModal }) => {
  return (
    <ModalOutside onClick={closeModal}>
      <ModalItself onClick={e => e.stopPropagation()}>
        <OpenMyPage />
      </ModalItself>
    </ModalOutside>
  );
};
const ModalOutside = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const ModalItself = styled.div`
  ${({ theme }) => theme.variables.flex('column', 'space-around')}
  z-index: 100;
  width: 190px;
  height: 180px;
  background-color: white;
  position: fixed;
  right: 5.5%;
  top: 10%;
  border-radius: 7px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export default LoggedModal;
