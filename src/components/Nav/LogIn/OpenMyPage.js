import React from 'react';
import styled from 'styled-components';

const OpenMyPage = () => {
  const clickToLogOut = () => {
    localStorage.removeItem('token');
    window.open('http://localhost:3000', '_self');
  };

  return (
    <>
      <CheckReservation>나의 여행</CheckReservation>
      <CheckPayHistory>도움말</CheckPayHistory>
      <LogOut onClick={clickToLogOut}>로그아웃</LogOut>
    </>
  );
};
const CheckReservation = styled.button`
  width: 90%;
  height: 30%;
  ${({ theme }) => theme.variables.btnTransparent}
  border-bottom: 1px solid #ddd;
  font-weight: bold;
`;
const CheckPayHistory = styled(CheckReservation)``;
const LogOut = styled(CheckReservation)`
  border-bottom: none;
`;
export default OpenMyPage;
