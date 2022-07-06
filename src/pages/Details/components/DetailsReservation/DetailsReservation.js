import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import HostContentSection from './HostContentSection';
import FacilitySection from './FacilitySection';
import Calendar from '../../../../components/Calender/Calendar';

import { FaAngleDown } from 'react-icons/fa';
import { FaAngleUp } from 'react-icons/fa';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { IoIosRemoveCircleOutline } from 'react-icons/io';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import useGetRoomDetail from '../../../../hooks/useGetRoomDetail';

const DetailsReservation = () => {
  const [open, setOpen] = React.useState(true);
  const roomDetailData = useGetRoomDetail();

  const { max_guest, max_pet } = roomDetailData;

  const [peopleCount, setPeopleCount] = useState({
    guestCount: 1,
    childCount: 0,
    babyCount: 0,
    petCount: 0,
  });

  const { guestCount, childCount, babyCount, petCount } = peopleCount;

  const guestData = [
    {
      id: 0,
      type: '성인',
      age: '만 13세 이상',
      maxCount: max_guest - childCount,
      min: 1,
      count: guestCount,
      name: 'guestCount',
    },
    {
      id: 1,
      type: '어린이',
      age: '만 2~12세',
      maxCount: max_guest - guestCount,
      min: 0,
      count: childCount,
      name: 'childCount',
    },
    {
      id: 2,
      type: '유아',
      age: '만 2세 미만',
      maxCount: 5,
      min: 0,
      count: babyCount,
      name: 'babyCount',
    },
    {
      id: 3,
      type: '반려동물',
      age: '보조동물을 동반 하시나요?',
      maxCount: max_pet,
      min: 0,
      count: petCount,
      name: 'petCount',
      underline: 'underline',
    },
  ];

  const addCount = (name, count, maxCount) => {
    if (count < maxCount) {
      setPeopleCount({ ...peopleCount, [name]: count + 1 });
    }
  };

  const minusCount = (name, count, min) => {
    if (count > min) {
      setPeopleCount({ ...peopleCount, [name]: count - 1 });
    }
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Wrapper>
      <Left>
        <HostContentSection />
        <FacilitySection />
        <CalendarContainer>
          <CalendarBox>
            <Title>체크인 날짜를 선택해주세요.</Title>
            <CheckConfigText>
              여행 날짜를 입력하여 정확한 요금을 확인하세요.
            </CheckConfigText>
            <Calendar />
          </CalendarBox>
        </CalendarContainer>
      </Left>
      <Right>
        <StickyBox>
          <StickyBoxIn>
            <ReserveContainer>
              <ReserveBox>
                <CheckContainer>
                  <CheckHeaderBox>
                    <CheckHeaderSpan size="22px">
                      요금을 확인하려면 날짜를 <p>입력하세요.</p>
                    </CheckHeaderSpan>
                    {/* <CheckHeaderSpan size="22px">₩174,122</CheckHeaderSpan>
                    <CheckHeaderSpan size="16px">/박</CheckHeaderSpan> */}
                  </CheckHeaderBox>
                  <CheckBox>
                    <CheckBoxTop>
                      <CheckBoxTopBtn borderRadius="8px 8px 0px 0px">
                        <CheckBoxTopBtnIn>
                          <CheckBoxTopBtnInText>체크인</CheckBoxTopBtnInText>
                          <CheckBoxTopBtnInDateText>
                            날짜 추가
                          </CheckBoxTopBtnInDateText>
                        </CheckBoxTopBtnIn>
                        <CheckBoxTopBtnIn border="1px solid rgb(176, 176, 176)">
                          <CheckBoxTopBtnInText>체크인</CheckBoxTopBtnInText>
                          <CheckBoxTopBtnInDateText>
                            날짜 추가
                          </CheckBoxTopBtnInDateText>
                        </CheckBoxTopBtnIn>
                      </CheckBoxTopBtn>
                    </CheckBoxTop>
                    <CheckBoxBottom>
                      <CheckBoxTopBtn
                        borderRadius="0px 0px 8px 8px"
                        borderTop="0px"
                      >
                        <CheckBoxTopBtnIn>
                          <ListItemButton onClick={handleClick}>
                            <MyTopListItemText>
                              게스트 {guestCount + childCount}명
                              {babyCount >= 1 && `, 유아${babyCount}명`}
                              {petCount >= 1 && `, 반려동물${petCount}마리`}
                            </MyTopListItemText>
                            {open ? (
                              <FaAngleDown size="20" />
                            ) : (
                              <FaAngleUp size="20" />
                            )}
                          </ListItemButton>
                          <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                              {guestData.map(input => (
                                <ListItemButton sx={{ pl: 4 }} key={input.id}>
                                  <MyListItemText underline={input.underline}>
                                    {input.type} <p>{input.age}</p>
                                  </MyListItemText>
                                  <CountBox>
                                    <RemoveCountBtn
                                      onClick={e => {
                                        e.preventDefault();
                                        minusCount(
                                          input.name,
                                          input.count,
                                          input.min
                                        );
                                      }}
                                      primary={input.count}
                                      min={input.min}
                                    >
                                      <IoIosRemoveCircleOutline size="34" />
                                    </RemoveCountBtn>
                                    <CountSpan>{input.count}</CountSpan>
                                    <AddCountBtn
                                      onClick={e => {
                                        e.preventDefault();
                                        addCount(
                                          input.name,
                                          input.count,
                                          input.maxCount
                                        );
                                      }}
                                      primary={input.count}
                                      maxCount={input.maxCount}
                                    >
                                      <IoIosAddCircleOutline size="34" />
                                    </AddCountBtn>
                                  </CountBox>
                                </ListItemButton>
                              ))}
                            </List>
                          </Collapse>
                        </CheckBoxTopBtnIn>
                      </CheckBoxTopBtn>
                    </CheckBoxBottom>
                  </CheckBox>

                  <CheckBtnBox>
                    <CheckBtn>
                      <span>예약 가능 여부 보기</span>
                    </CheckBtn>
                  </CheckBtnBox>
                </CheckContainer>
                {/* <PaymentContainer /> */}
              </ReserveBox>
            </ReserveContainer>
          </StickyBoxIn>
        </StickyBox>
      </Right>
    </Wrapper>
  );
};
export default DetailsReservation;

// Count -----------------------------------

const CountBox = styled.div`
  display: flex;
  align-items: center;
`;

const RemoveCountBtn = styled.div`
  opacity: ${props => (props.primary <= props.min ? 0.1 : 0.4)};
  cursor: ${props => (props.primary <= props.min ? 'not-allowed' : 'pointer')};
  &:hover {
    opacity: ${props => props.primary > props.min && 1};
  }
`;

const AddCountBtn = styled.div`
  opacity: ${props => (props.primary >= props.maxCount ? 0.1 : 0.4)};
  cursor: ${props =>
    props.primary >= props.maxCount ? 'not-allowed' : 'pointer'};
  &:hover {
    opacity: ${props => props.primary < props.maxCount && 1};
  }
`;

const CountSpan = styled.span`
  font-size: 18px;
  font-weight: lighter;
  padding: 0px 12px;
`;

const MyListItemText = styled(ListItemText)`
  span {
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    p {
      color: rgb(34, 34, 34);
      font-size: 14px;
      font-weight: 400;
      text-decoration: ${props => props.underline};
    }
  }
`;

const MyTopListItemText = styled(ListItemText)`
  span {
    font-size: 14px;
    line-height: 18px;
  }
`;

// Left -----------------------------------

const Wrapper = styled.div`
  padding-top: 48px;
  display: flex;
`;

const Left = styled.div`
  position: relative;
`;

const Container = styled.div`
  width: 653px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const Title = styled.h2`
  font-size: 22px;
  color: #222222;
  margin-bottom: ${props => props.marginBottom};
`;

const CheckConfigText = styled.div`
  padding-top: 8px;
  line-height: 18px;
  text-overflow: ellipsis;
  height: 36px;
  font-weight: 300;
  opacity: 0.5;
`;

const CalendarContainer = styled(Container)`
  padding: 48px 0px;
`;

const CalendarBox = styled.div`
  padding-bottom: 24px;
`;

// Right ------------------------------------------------

const Right = styled.div`
  position: relative;
  width: 33.33333333%;
  margin-left: 8.33333333%;
`;

const StickyBox = styled.div`
  position: sticky;
  top: 100px;
  width: 100%;
  display: inline-block;
  z-index: 1;
`;

const StickyBoxIn = styled.div`
  padding-bottom: 48px;
`;

const ReserveContainer = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
`;

const ReserveBox = styled.div`
  color: rgb(34, 34, 34);
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

const CheckContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckHeaderBox = styled.div`
  margin-bottom: 24px;
`;

const CheckHeaderSpan = styled.span`
  font-size: ${props => props.size};
`;

const CheckBox = styled.div`
  margin-bottom: 16px;
  border-radius: 8px;
`;

const CheckBoxTop = styled.div`
  display: flex;
`;

const CheckBoxTopBtn = styled.button`
  position: relative;
  display: flex;
  width: 100%;
  margin: 0px;
  border: 1px solid rgb(176, 176, 176);
  border-top: ${props => props.borderTop};
  color: black;
  background-color: transparent;
  border-radius: ${props => props.borderRadius};
  box-shadow: none;
  padding: 0px;
  text-align: left;
  cursor: pointer;
`;

const CheckBoxTopBtnIn = styled.div`
  position: relative;
  flex: 1 1 0%;
  padding: 0px;
  overflow: hidden;
  border-left: ${props => props.border};
`;

const CheckBoxTopBtnInText = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  right: 12px;
  margin: 0px;
  padding: 0px;
  pointer-events: none;
  font-size: 10px;
  line-height: 12px;
  color: rgb(34, 34, 34);
  text-transform: uppercase;
  font-weight: 800;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CheckBoxTopBtnInDateText = styled.div`
  min-height: 56px;
  width: 100%;
  border: none;
  outline: none;
  margin: 0px;
  padding: 26px 12px 10px;
  background-color: transparent;
  font-family: inherit;
  font-size: 14px;
  font-weight: inherit;
  line-height: 18px;
  appearance: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgb(113, 113, 113);
`;

const CheckBoxBottom = styled.div`
  display: flex;
`;

const CheckBtnBox = styled.div``;

const CheckBtn = styled.button`
  cursor: pointer;
  display: inline-block;
  margin: 0px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  font-size: 16px;
  border-radius: 8px;
  outline: none;
  padding: 14px 24px;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s,
    -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
  border: none;
  background: linear-gradient(
    to right,
    rgb(230, 30, 77) 0%,
    rgb(227, 28, 95) 50%,
    rgb(215, 4, 102) 100%
  );
  color: rgb(255, 255, 255);
  width: 100%;
`;
