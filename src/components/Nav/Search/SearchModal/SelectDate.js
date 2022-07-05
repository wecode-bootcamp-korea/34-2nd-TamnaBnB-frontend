import React from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import '../../../Calendar/Calendar.css';
import styled from 'styled-components';

const SelectDate = ({ onChange, startDate, endDate, closeWhenModal }) => {
  return (
    <>
      <ModalOutside onClick={closeWhenModal} />
      <SelectWrapper onClick={e => e.stopPropagation()}>
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          minDate={new Date()}
          locale={ko}
          isClearable={true}
          monthsShown={2}
          showPopperArrow={false}
          dateFormat="yyyy/MM/dd"
        />
      </SelectWrapper>
    </>
  );
};
const ModalOutside = styled.div``;
const SelectWrapper = styled.div`
  position: fixed;
  left: 32%;
  top: 18%;
  width: 690px;
  height: 0px;
  background-color: white;
  border-radius: 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  z-index: 1000;
`;

export default SelectDate;
