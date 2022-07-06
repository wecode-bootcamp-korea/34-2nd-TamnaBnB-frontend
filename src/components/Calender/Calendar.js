import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.css';

const Calendar = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const checkInDate =
    startDate != null && startDate.toLocaleString().substr(0, 12);
  const checkOutDate =
    endDate != null && endDate.toLocaleString().substr(0, 12);

  return (
    <>
      <DatePicker
        popperPlacement="auto"
        showPopperArrow={false}
        dateFormat="yyyy.MM.dd"
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={update => {
          setDateRange(update);
        }}
        minDate={new Date()}
        locale={ko}
        showDisabledMonthNavigation
        disabledKeyboardNavigation
        isClearable={true}
        monthsShown={2}
        inline
        block
      />
      <span>{checkInDate}</span>
      <span>{checkOutDate}</span>
    </>
  );
};

export default Calendar;
