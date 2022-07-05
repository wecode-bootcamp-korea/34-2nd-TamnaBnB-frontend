import React from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.css';

const Calendar = ({ startDate, endDate, onChange }) => {
  return (
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
  );
};

export default Calendar;
