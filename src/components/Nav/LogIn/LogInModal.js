import React from 'react';
import { GrClose } from 'react-icons/gr';
import styled from 'styled-components';
import KakaoModal from './KakaoModal';

const LogInModal = ({ closeModal }) => {
  return (
    <ModalOutside onClick={closeModal}>
      <ModalItself onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <CancelBtn onClick={closeModal} />
          <Welcome>소셜 로그인</Welcome>
        </ModalHeader>
        <KakaoModal />
      </ModalItself>
    </ModalOutside>
  );
};
const ModalOutside = styled.div`
  ${({ theme }) => theme.variables.flex()}
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
const ModalItself = styled.div`
  padding: 0px;
  width: 400px;
  height: 500px;
  background-color: white;
  position: fixed;
  left: 40%;
  top: 15%;
  z-index: 200;
  border-radius: 7px;
`;
const ModalHeader = styled.div`
  ${({ theme }) => theme.variables.flex('', '', 'center')}
  height: 10%;
  border-bottom: 1px solid #ddd;
`;
const CancelBtn = styled(GrClose)`
  width: 10%;
  font-size: 15px;
  cursor: pointer;
`;
const Welcome = styled.p`
  text-align: center;
  width: 80%;
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
`;

export default LogInModal;
