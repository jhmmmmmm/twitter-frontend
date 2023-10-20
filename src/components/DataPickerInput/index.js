import { DatePicker } from 'antd-mobile';
import React, { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import style from './index.module.scss';
import datepickerIcon from '../../assets/date.svg';

const DatePickerInput = React.forwardRef(({
  value,
  onChange,
}, ref) => {
  const [visible, setVisible] = useState(false);
  const onClickDatePicker = () => {
    setVisible(true);
  };
  return (
    <div ref={ref}>
      <DatePicker
        title="Select time"
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        onConfirm={(val) => {
          onChange(moment(val).format('YYYYMMDD'));
        }}
      />
      <div className={style.birthdayInput} onClick={onClickDatePicker}>
        <div className={style.birthdayTitle}>Birthday</div>
        <div>
          <span className={style.birthdayPlaceholder}>{value ? moment(value).format('YYYY/MM/DD') : 'Year/Month/Day'}</span>
          <img className={style.datepickerIcon} src={datepickerIcon} alt="datepickerIcon" />
        </div>
      </div>
    </div>
  );
});

DatePickerInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

DatePickerInput.defaultProps = {
  value: '',
  onChange: () => {},
};

export default DatePickerInput;
