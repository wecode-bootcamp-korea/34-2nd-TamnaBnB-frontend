import React, { useState } from 'react';
import { VscGlobe, VscMenu } from 'react-icons/vsc';
import { FaUserCircle } from 'react-icons/fa';
import { BsEmojiSmile } from 'react-icons/bs';
import styled from 'styled-components';
import LogInModal from './LogInModal';
import LoggedModal from './LoggedModal';

const LogIn = ({ closeAllModals }) => {
  const [modalCondition, setModalCondition] = useState(false);

  const loginFirst = () => {
    closeAllModals();
    setModalCondition(!modalCondition);
  };

  return (
    <div>
      <LogInArea>
        <ProfileBox>
          <BeAHost>호스트 되기</BeAHost>
          <Globe />
          <LoginBox>
            <LoginButton onClick={loginFirst}>
              <ButtonWrapper>
                <HamburgerBtn />
                {!localStorage.getItem('token') ? (
                  <ProfileIcon />
                ) : (
                  <UserPicture src={localStorage.getItem('userImage')} />
                )}
              </ButtonWrapper>
            </LoginButton>
          </LoginBox>
          {!localStorage.getItem('token')
            ? modalCondition && (
                <LogInModal
                  closeModal={() => setModalCondition(!modalCondition)}
                />
              )
            : modalCondition && (
                <LoggedModal
                  closeModal={() => setModalCondition(!modalCondition)}
                />
              )}
        </ProfileBox>
      </LogInArea>
    </div>
  );
};

const LogInArea = styled.div`
  ${({ theme }) => theme.variables.flex('flex-end', '')}
  width: 300px;
`;
const ProfileBox = styled.div`
  ${({ theme }) => theme.variables.flex('', 'center', 'center')}
  width: 100%;
`;
const BeAHost = styled.p`
  color: #222222;
  font-size: 15px;
  font-weight: bold;
`;
const Globe = styled(VscGlobe)`
  font-size: 20px;
  margin: 0 20px;
`;
const LoginBox = styled.div`
  ${({ theme }) => theme.variables.flex('flex-end', 'center')}
  width: 100px;
  height: 80px;
`;
const LoginButton = styled.button`
  ${({ theme }) => theme.variables.flex()}
  width: 75px;
  height: 43px;
  background-color: transparent;
  border-radius: 20px;
  border: 0.5px solid #ddd;
`;
const ButtonWrapper = styled.div`
  ${({ theme }) => theme.variables.flex('', '', 'center')}
  padding: 0;
  width: 85px;
`;
const HamburgerBtn = styled(VscMenu)`
  margin-left: 7px;
  color: black;
  font-size: 15px;
  font-weight: bold;
`;
const ProfileIcon = styled(FaUserCircle)`
  padding-left: 10px;
  color: #717171;
  font-size: 43px;
`;
const UserPicture = styled.img`
  margin-left: 7px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
`;
export default LogIn;
