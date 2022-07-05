import React from 'react';
import styled from 'styled-components';

const KakaoModal = () => {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLogIn = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <ModalContext>
      <ModalLogoBox>
        <ModalLogoImage src="/images/Logo.png" />
      </ModalLogoBox>
      <ModalText>환영합니다!</ModalText>
      <ModalText>간편한 로그인을 위해</ModalText>
      <ModalText>소셜 로그인을 이용해 주세요.</ModalText>
      <KaKaoBtn onClick={handleLogIn}>
        <KaKaoImage src="/images/kakao_login_medium_wide.png" />
      </KaKaoBtn>
    </ModalContext>
  );
};
const ModalContext = styled.div`
  ${({ theme }) => theme.variables.flex('column', '', 'center')}
  height: 100%;
  z-index: 200;
`;
const ModalLogoBox = styled.div`
  width: 200px;
  height: 80px;
  margin: 10px 0 15px 0;
`;
const ModalLogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const ModalText = styled.p`
  margin-top: 30px;
  color: black;
  font-size: 17px;
  font-weight: bold;
`;
const KaKaoBtn = styled.button`
  margin-top: 90px;
  width: 300px;
  height: 50px;
  ${({ theme }) => theme.variables.btnTransparent}
`;
const KaKaoImage = styled.img``;
export default KakaoModal;
