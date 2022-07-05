import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogIn from './LogIn/LogIn';
import Search from './Search/Search';
import styled from 'styled-components';
import SearchClickedModal from './Search/SearchClickedModal';
import SelectRegion from './Search/SearchModal/SelectRegion';
import SelectVisitors from './Search/SearchModal/SelectVisitors';
import Calendar from '../Calendar/Calendar';

const Nav = () => {
  const [searchModal, setSearchModal] = useState(false);

  const [whereModal, setWhereModal] = useState(false);

  const [whenModal, setWhenModal] = useState(false);

  const [visitorsModal, setVisitorsModal] = useState(false);

  const [clickedCity, setClickedCity] = useState('여행지 검색');

  const [adultCount, setAdultCount] = useState(0);

  const [ChildrenCount, setChildrenCount] = useState(0);

  const [infantCount, setInfantCount] = useState(0);

  const [petCount, setPetCount] = useState(0);

  const closeAllModals = () => {
    searchModal && setSearchModal(false);
    whereModal && setWhereModal(!whereModal);
    whenModal && setWhenModal(!whenModal);
    visitorsModal && setVisitorsModal(!visitorsModal);
  };

  const addAdultCount = () => {
    adultCount >= 0 && setAdultCount(adultCount + 1);
  };

  const removeAdultCount = () => {
    adultCount && setAdultCount(adultCount - 1);
  };

  const addChildrenCount = () => {
    ChildrenCount >= 0 && setChildrenCount(ChildrenCount + 1);
  };

  const removeChildrenCount = () => {
    ChildrenCount && setChildrenCount(ChildrenCount - 1);
  };
  const addInfantCount = () => {
    infantCount < 6 && setInfantCount(infantCount + 1);
  };

  const removeInfantCount = () => {
    infantCount && setInfantCount(infantCount - 1);
  };
  const addPetCount = () => {
    petCount < 6 && setPetCount(petCount + 1);
  };

  const removePetCount = () => {
    petCount && setPetCount(petCount - 1);
  };

  const resetSelection = () => {
    setAdultCount(0);
    setChildrenCount(0);
    setInfantCount(0);
    setPetCount(0);
  };

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const checkInDate =
    startDate != null &&
    startDate
      .toLocaleString()
      .slice(0, -13)
      .split(' ')
      .join('-')
      .replace(/\./g, '');

  const checkOutDate =
    endDate != null &&
    endDate
      .toLocaleString()
      .slice(0, -13)
      .split(' ')
      .join('-')
      .replace(/\./g, '');

  return (
    <div>
      <Navigation primary={!searchModal}>
        <Wrapper>
          <Logo>
            <ImageBox>
              <Link to="/">
                <Image src="/images/Logo.png" />
              </Link>
            </ImageBox>
          </Logo>
          <Search searchModal={searchModal} setSearchModal={setSearchModal} />
          <LogIn closeAllModals={closeAllModals} />
        </Wrapper>
        {searchModal && (
          <SearchClickedModal
            closeAllModals={closeAllModals}
            whereModal={whereModal}
            setWhereModal={setWhereModal}
            whenModal={whenModal}
            setWhenModal={setWhenModal}
            visitorsModal={visitorsModal}
            setVisitorsModal={setVisitorsModal}
            clickedCity={clickedCity}
            adultCount={adultCount}
            ChildrenCount={ChildrenCount}
            infantCount={infantCount}
            petCount={petCount}
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
          />
        )}
      </Navigation>
      {whereModal && (
        <SelectRegion
          closeWhereModal={() => setWhereModal(!whereModal)}
          setClickedCity={setClickedCity}
        />
      )}
      {whenModal && (
        <Calendar onChange={onChange} startDate={startDate} endDate={endDate} />
      )}
      {visitorsModal && (
        <SelectVisitors
          closeVisitorsModal={() => setVisitorsModal(!visitorsModal)}
          adultCount={adultCount}
          setAdultCount={setAdultCount}
          ChildrenCount={ChildrenCount}
          setChildrenCount={setChildrenCount}
          infantCount={infantCount}
          setInfantCount={setInfantCount}
          petCount={petCount}
          setPetCount={setPetCount}
          addAdultCount={addAdultCount}
          removeAdultCount={removeAdultCount}
          addChildrenCount={addChildrenCount}
          removeChildrenCount={removeChildrenCount}
          addInfantCount={addInfantCount}
          removeInfantCount={removeInfantCount}
          addPetCount={addPetCount}
          removePetCount={removePetCount}
          resetSelection={resetSelection}
        />
      )}
    </div>
  );
};

const Navigation = styled.nav`
  position: fixed;
  width: 100%;
  height: ${props => (props.primary ? '80px' : '160px')};
  border-bottom: 1px solid #ebebeb;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 0 80px;
  transition: 0.3s;
`;
const Logo = styled.div`
  width: 300px;
  height: 100%;
`;
const ImageBox = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 100px;
  padding-bottom: 5px;
  object-fit: contain;
`;

export default Nav;
