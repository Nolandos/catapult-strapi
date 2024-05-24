import React, { useState } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const UTCDatePicker = ({ onChange, value }) => {
  const [date, setDate] = useState(value ? moment.utc(value) : null);

  const handleDateChange = (date) => {
    setDate(date);
    if (date) {
      onChange(date.utc().toISOString());
    } else {
      onChange(null);
    }
  };

  return (
    <>
      <span>{}</span>
      <DatePicker
        value={date}
        onChange={handleDateChange}
      showTime
      format="YYYY-MM-DD HH:mm:ss"
    />
    </>
  );
};

export default UTCDatePicker;
