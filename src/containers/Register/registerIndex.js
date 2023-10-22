import { useEffect, useState } from 'react';
import { registeUser } from '@services/register';
import Show from '@components/Show';
import { Toast } from 'antd-mobile';
import { useAppContext } from '@utils/context';
import { useNavigate } from 'react-router-dom';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';

const STEP = {
  ONE: 1,
  TWO: 2,
};

const Register = () => {
  const [step, setStep] = useState(STEP.ONE);
  const [userInfo, setUserInfo] = useState({});

  const [, setStore] = useAppContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (step === STEP.ONE) {
      setStore({
        closeHeaderHandler: () => navigate('/login'),
      });
    }
    if (step === STEP.TWO) {
      setStore({
        closeHeaderHandler: () => setStep(STEP.ONE),
      });
    }
  }, [step]);

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

  return (
    <div>
      <Show visible={step === STEP.ONE}>
        <FirstStep gotoNextStepHandler={gotoNextStepHandler} />
      </Show>

      <Show visible={step === STEP.TWO} isMount>
        <SecondStep
          userInfo={userInfo}
          confirmRegisterHandler={confirmRegisterHandler}
        />
      </Show>
    </div>
  );
};

export default Register;
