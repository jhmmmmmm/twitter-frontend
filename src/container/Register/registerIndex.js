import Header from '@components/Header';
import { useState } from 'react';
import { registeUser } from '@services/register';
import Show from '@components/Show';
import { Toast } from 'antd-mobile';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';

const STEP = {
  ONE: 1,
  TWO: 2,
};

const Register = () => {
  const [step, setStep] = useState(STEP.ONE);
  const [userInfo, setUserInfo] = useState({});

  const gotoNextStepHandler = (data) => {
    setUserInfo(data);
    setStep(STEP.TWO);
  };

  const confirmRegisterHandler = async (password) => {
    const res = await registeUser({
      password,
      userInfo,
    });
    if (res.success) {
      Toast.show('login success');
      return;
    }
    Toast.show('login failed');
    console.log(res);
  };

  const onClickClose = () => {
    setStep(STEP.ONE);
  };

  return (
    <div>
      <Header onClickClose={onClickClose} />
      <Show visible={step === STEP.ONE}>
        <FirstStep gotoNextStepHandler={gotoNextStepHandler} />
      </Show>

      <Show visible={step === STEP.TWO}>
        <SecondStep
          userInfo={userInfo}
          confirmRegisterHandler={confirmRegisterHandler}
        />
      </Show>
    </div>
  );
};

export default Register;
