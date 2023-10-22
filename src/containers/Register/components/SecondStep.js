import { Input } from 'antd-mobile';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Footer from './Footer';
import style from '../registerIndex.module.scss';

const SecondStep = ({
  confirmRegisterHandler,
  userInfo,
}) => {
  const [password, setPassword] = useState();
  const [disabled, setDisabled] = useState(true);

  const onConfirmRegister = () => {
    confirmRegisterHandler(password);
  };

  const onChangePwd = (val) => {
    setPassword(val);
  };

  const onChangeconfirmPwd = (val) => {
    if (val === password) {
      setDisabled(false);
      return;
    }
    setDisabled(true);
  };

  return (
    <div className={style.SecondStep}>
      <div className={style.form}>
        <div className={style.formTitle}>Your need a password</div>
        <div className={style.showLabelContainer}>
          <div className={style.showLabel}>
            Name:
            {' '}
            <span>{userInfo.username}</span>
          </div>
          {userInfo.email && (
          <div className={style.showLabel}>
            Email:
            {' '}
            <span>{userInfo.email}</span>
          </div>
          )}
          {userInfo.tel && (
          <div className={style.showLabel}>
            Phone:
            {' '}
            <span>{userInfo.tel}</span>
          </div>
          )}
          <div className={style.showLabel}>
            Birthday:
            {' '}
            <span>{userInfo.birthday}</span>
          </div>
        </div>
        <div className={style.label}>Please enter password</div>
        <Input className={style.input} onChange={onChangePwd} />
        <div className={style.label}>Please enter password again</div>
        <Input className={style.input} type="password" onChange={onChangeconfirmPwd} />
        {disabled && <div className={style.showTip}>Password not same</div>}
      </div>
      <Footer disabled={disabled} label="Confirm" onClickNextStep={onConfirmRegister} />
    </div>
  );
};

SecondStep.propTypes = {
  confirmRegisterHandler: PropTypes.func.isRequired,
  userInfo: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    tel: PropTypes.string,
    birthday: PropTypes.string,
  }).isRequired,
};

export default SecondStep;
