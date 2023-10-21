import PropTypes from 'prop-types';
import { Input } from 'antd-mobile';
import React, { useEffect, useState } from 'react';
import style from './index.module.scss';

const TInput = React.forwardRef(({
  label,
  value,
  length,
  onChange,
  ...otherProps
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (value) {
      setIsFocused(true);
      setHide(true);
    }
  }, []);

  const onFocus = () => {
    setIsFocused(true);
    setHide(true);
  };

  const onBlur = () => {
    if (!value || value.length === 0) {
      setIsFocused(false);
      setHide(false);
    }
  };

  const onChangeHandler = (val) => {
    if (length && value.length > length) {
      return;
    }
    onChange(val);
  };

  return (
    <div ref={ref}>
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
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...otherProps}
        />
      </div>
    </div>
  );
});

TInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  length: PropTypes.number,
  onChange: PropTypes.func,
};

TInput.defaultProps = {
  label: '',
  value: undefined,
  length: undefined,
  onChange: () => {},
};

export default TInput;
