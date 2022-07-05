import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoSearchCircle } from 'react-icons/io5';

const SearchClickedModal = ({
  closeAllModals,
  whereModal,
  setWhereModal,
  whenModal,
  setWhenModal,
  visitorsModal,
  setVisitorsModal,
  clickedCity,
  adultCount,
  childrenCount,
  infantCount,
  petCount,
  checkInDate,
  checkOutDate,
}) => {
  const closeButWhere = () => {
    setWhereModal(!whereModal);
    setWhenModal(false);
    setVisitorsModal(false);
  };
  const closeButWhen = () => {
    setWhenModal(!whenModal);
    setWhereModal(false);
    setVisitorsModal(false);
  };
  const closeButVisitors = () => {
    setVisitorsModal(!visitorsModal);
    setWhereModal(false);
    setWhenModal(false);
  };
  const navigate = useNavigate();
  const sendSearchInfo = () => {
    navigate(
      `maplist/1/rooms?max_guest=${
        adultCount + childrenCount + infantCount
      }&max_pet=${petCount}&check_in=${checkInDate}&check_out=${checkOutDate}&region=${clickedCity}`
    );
    closeAllModals();
  };

  return (
    <>
      <ModalOutside onClick={closeAllModals} />
      <ModalHead onClick={e => e.stopPropagation()}>
        <Accommodation>숙소</Accommodation>
      </ModalHead>
      <ModalInputBtn onClick={e => e.stopPropagation()}>
        <Where onClick={closeButWhere}>
          <TitleWrapper>
            <MainTitle>여행지</MainTitle>
            <SubTitle>{clickedCity}</SubTitle>
          </TitleWrapper>
        </Where>
        <Border />
        <When onClick={closeButWhen}>
          <TitleWrapper>
            <MainTitle>체크인</MainTitle>
            <SubTitle>{checkInDate}</SubTitle>
          </TitleWrapper>
          <TitleWrapper>
            <MainTitle>체크아웃</MainTitle>
            <SubTitle>{checkOutDate}</SubTitle>
          </TitleWrapper>
        </When>
        <Border />
        <Visitors onClick={closeButVisitors}>
          <TitleWrapper>
            <MainTitle>여행자</MainTitle>
            <SubTitle>
              게스트 {adultCount + childrenCount + infantCount + petCount}명
            </SubTitle>
          </TitleWrapper>
        </Visitors>
        <SearchIcon onClick={sendSearchInfo} />
      </ModalInputBtn>
    </>
  );
};
const ModalOutside = styled.div`
  position: fixed;
  top: 160px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalHead = styled.div`
  position: fixed;
  top: 3%;
  left: 48%;
  width: 55px;
  border-radius: 7px;
`;

const Accommodation = styled.p`
  color: black;
  font-size: 20px;
  text-align: center;
`;

const ModalInputBtn = styled.div`
  ${({ theme }) => theme.variables.flex()}
  margin: 0 auto;
  width: 700px;
  height: 60px;
  border: 1px solid #ddd;
  z-index: 50;
  border-radius: 35px;
`;
const TitleWrapper = styled.div`
  margin: 10px 0 0 25px;
  width: 100px;
  height: 50px;
`;
const MainTitle = styled.div`
  font-size: 15px;
`;
const Where = styled.div`
  width: 30%;
  height: 100%;
  border-radius: 35px;
  cursor: pointer;
  &:hover {
    background-color: #ebebeb;
  }
  &:focus {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;
const When = styled(Where)`
  ${({ theme }) => theme.variables.flex()}
  width: 40%;
`;
const Visitors = styled(Where)`
  ${({ theme }) => theme.variables.flex()}
`;
const Border = styled.div`
  height: 40px;
  border-left: 1px solid #ebebeb;
`;
const SubTitle = styled.p`
  margin-top: 5px;
  font-size: 13px;
  color: gray;
`;
const SearchIcon = styled(IoSearchCircle)`
  padding-left: 10px;
  width: 60px;
  height: 50px;
  font-size: 40px;
  font-weight: bold;
  color: #fd6f22;
  border-radius: 35px;

  cursor: pointer;
  &:hover {
    background-color: #ebebeb;
  }
  &:focus {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;
export default SearchClickedModal;
