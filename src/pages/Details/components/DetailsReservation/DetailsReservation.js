import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import HostContentSection from './HostContentSection';
import FacilitySection from './FacilitySection';
import ReserveSection from './ReserveSection/ReserveSection';
import Calendar from '../../../../components/Calender/Calendar';

const DetailsReservation = ({ roomDetailData }) => {
  const [calendarData, setCalendarData] = useState([null, null]);
  const [myStartDate, myEndDate] = calendarData;

  const checkInDate =
    myStartDate != null && myStartDate.toLocaleString().split(' 오전')[0];
  const checkOutDate =
    myEndDate != null && myEndDate.toLocaleString().split(' 오전')[0];

  const checkStartDate =
    checkInDate &&
    checkInDate.split('. 오전')[0].replaceAll('. ', '-').slice(0, -1);
  const checkEndDate =
    checkOutDate &&
    checkOutDate.split('. 오전')[0].replaceAll('. ', '-').slice(0, -1);

  const start = new Date(checkStartDate).getTime();
  const end = new Date(checkEndDate).getTime();
  const checkDayResult = (end - start) / (1000 * 60 * 60 * 24);

  return (
    <Wrapper>
      <Left>
        <HostContentSection roomDetailData={roomDetailData} />
        <FacilitySection roomDetailData={roomDetailData} />
        <CalendarContainer>
          <CalendarBox>
            <Title>체크인 날짜를 선택해주세요.</Title>
            <CheckConfigText>
              여행 날짜를 입력하여 정확한 요금을 확인하세요.
            </CheckConfigText>
            <Calendar setCalendarData={setCalendarData} />
          </CalendarBox>
        </CalendarContainer>
      </Left>
      <Right>
        <ReserveSection
          roomDetailData={roomDetailData}
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          checkStartDate={checkStartDate}
          checkEndDate={checkEndDate}
          checkDayResult={checkDayResult}
        />
      </Right>
    </Wrapper>
  );
};
export default DetailsReservation;

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
