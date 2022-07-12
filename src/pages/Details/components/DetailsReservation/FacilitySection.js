import React from 'react';
import styled from 'styled-components';

import { MdOutlineBedroomParent } from 'react-icons/md';
import { MdOutlineBedroomChild } from 'react-icons/md';
import { GiOrange } from 'react-icons/gi';

const FacilitySection = ({ roomDetailData }) => {
  const { facilites } = roomDetailData;

  return (
    <>
      <HouseBed>
        <HouseBedTitleBox>
          <Title>숙박장소</Title>
        </HouseBedTitleBox>
        <HouseBedContentsContainer>
          <HouseBedContentBox>
            <BedContentBox>
              <BedContents>
                <BedIconBox>
                  <MdOutlineBedroomParent size="24" />
                </BedIconBox>
                <BedTitle>침실</BedTitle>
                <BedCondition>더블 침대 1개</BedCondition>
              </BedContents>
            </BedContentBox>
          </HouseBedContentBox>
          <HouseBedContentBox>
            <BedContentBox>
              <BedContents>
                <BedIconBox>
                  <MdOutlineBedroomChild size="24" />
                </BedIconBox>
                <BedTitle>침실2</BedTitle>
                <BedCondition>싱글 침대 1개</BedCondition>
              </BedContents>
            </BedContentBox>
          </HouseBedContentBox>
        </HouseBedContentsContainer>
      </HouseBed>
      <HouseFacilities>
        <HouseBedTitleBox>
          <Title>숙소 편의시설</Title>
        </HouseBedTitleBox>
        <HouseFacilitiesWrapper>
          {facilites &&
            facilites.map((facility, i) => (
              <FacilityContainer key={i}>
                <FacilityBox>
                  <div>{facility}</div>
                  <FacilityIconBox>
                    <GiOrange size="24" color="#FD6F22" />
                  </FacilityIconBox>
                </FacilityBox>
              </FacilityContainer>
            ))}
        </HouseFacilitiesWrapper>
      </HouseFacilities>
    </>
  );
};

export default FacilitySection;

const Container = styled.div`
  width: 653px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const HouseBed = styled(Container)`
  padding: 48px 0px;
`;

const HouseBedTitleBox = styled.div`
  padding-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 22px;
  color: #222222;
  margin-bottom: ${props => props.marginBottom};
`;

const HouseBedContentsContainer = styled.div`
  margin-bottom: 0px;
  padding: 0px;
  overflow: visible;
  display: flex;
`;

const HouseBedContentBox = styled.div`
  width: 33.3333%;
  padding-right: 16px;
`;

const BedContentBox = styled.div`
  width: 100%;
  height: 100%;
`;

const BedContents = styled.div`
  padding: 24px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  height: 100%;
  padding: 24px 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const BedIconBox = styled.div`
  margin-bottom: 16px;
`;

const BedTitle = styled.div`
  color: rgb(34, 34, 34);
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 8px;
`;

const BedCondition = styled.div`
  color: rgb(34, 34, 34);
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

const HouseFacilities = styled(Container)`
  padding: 48px 0px;
`;

const HouseFacilitiesWrapper = styled.div`
  margin-left: -8px;
  margin-right: -8px;
  width: calc(100% + 16px);
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const FacilityContainer = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  width: 50%;
`;

const FacilityBox = styled.div`
  padding-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row-reverse;
  color: #222222;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

const FacilityIconBox = styled.div`
  margin-right: 16px;
`;
