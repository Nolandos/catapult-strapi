import React, { useState } from 'react';
import { DatePicker, ConfigProvider } from 'antd';
import locale from 'antd/locale/en_GB';
import 'dayjs/locale/en-gb';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'
import {useIntl} from "react-intl";
dayjs.extend(utc);

const DatePickerUTC = ({ disabled, intlLabel, onChange, name, value }) => {
  const [date, setDate] = useState(value ? dayjs.utc(value, 'YYYY-MM-DD HH:mm:ss') : null);

  const handleDateChange = (_, dateStr) => {
    if (dateStr) {
      setDate(dayjs.utc(dateStr));
      onChange({ target: { name, value: dayjs.utc(dateStr).format() } });
    } else {
      setDate(null);
      onChange({ target: { name, value: null } });
    }
  };

  const { formatMessage } = useIntl();
  return (
    <ConfigProvider locale={locale}>
      <div style={{display: "flex", flexDirection: "column", gap: "4px"}}>
      <span
        style={{
          fontSize: '0.75rem',
          lineHeight: '1.33',
          fontWeight: '600',
          color: 'rgb(50, 50, 77)'
        }}
      >{intlLabel ? formatMessage(intlLabel) : ''}</span>
      <DatePicker
        locale={locale}
        disabled={disabled}
        value={date}
        onChange={handleDateChange}
        showTime
        format="YYYY-MM-DD HH:mm:ss"
      />
      </div>
    </ConfigProvider>
  );
};

export default DatePickerUTC;
