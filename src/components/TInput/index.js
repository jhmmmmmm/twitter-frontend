import PropTypes from 'prop-types';
import { Input } from 'antd-mobile';
import { useState } from 'react';
import style from './index.module.scss';

const TInput = ({
  label,
  value,
  length,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hide, setHide] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
    setHide(true);
  };

  const onBlur = () => {
    if (value.length === 0) {
      setIsFocused(false);
    }
    setHide(false);
  };

  const onChangeHandler = (val) => {
    if (length && value.length >= length) {
      return;
    }
    onChange(val);
  };

  return (
    <div className={hide ? style.tInputFocused : style.tInput}>
      <div className={isFocused ? style.labelFocused : style.label}>
        {label}
        {hide && length && (
        <span className={style.labelRight}>
          {value.length}
          /
          {length}
        </span>
        )}
      </div>
      <Input
        value={value}
        className={isFocused ? style.inputItemFocused : style.inputItem}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChangeHandler}
      />
    </div>
  );
};

TInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TInput;
