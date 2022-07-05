import React from 'react';
import styled from 'styled-components';
import VisitorList from '../../VisitorList/VisitorList';

const SelectVisitors = ({
  closeVisitorsModal,
  setAdultCount,
  adultCount,
  ChildrenCount,
  setChildrenCount,
  infantCount,
  setInfantCount,
  petCount,
  setPetCount,
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
      <ModalOutside onClick={closeVisitorsModal} />
      <SelectWrapper onClick={e => e.stopPropagation()}>
        <VisitorList
          adultCount={adultCount}
          ChildrenCount={ChildrenCount}
          infantCount={infantCount}
          petCount={petCount}
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
  position: fixed;
  left: 50%;
  top: 22.4%;
  width: 350px;
  height: 400px;
  background-color: white;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  z-index: 80;
`;

export default SelectVisitors;
