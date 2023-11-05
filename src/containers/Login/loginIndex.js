import {
  Form, Dialog,
} from 'antd-mobile';
import TInput from '@components/TInput';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '@utils/context';
import Cookies from 'js-cookie';
import { useGoTo } from '@utils/hooks';
import Footer from '../Register/components/Footer';
import style from './index.module.scss';
import { login } from '../../services/login';

const Login = () => {
  const [form] = Form.useForm();
  const [nextDisabled, setNextDisabled] = useState(true);
  const go = useGoTo();

  const [, setStore] = useAppContext();
  useEffect(() => {
    setStore({
      closeHeaderHandler: null,
    });
  }, []);

  const onValuesChange = async () => {
    try {
      const validate = await form.validateFields();
      if (validate) {
        setNextDisabled(false);
      }
    } catch (e) {
      if (e.errorFields.length === 0) {
        setNextDisabled(false);
        return;
      }
      setNextDisabled(true);
    }
  };

  const onSubmit = async () => {
    const values = await form.validateFields();
    if (values) {
      const res = await login(values.username, values.password);
      if (res.success && res.data.length > 0) {
        Dialog.alert({
          content: 'login success',
        });
        Cookies.set('userId', res.data[0].id);
        go('tweets');
        return;
      }
      Dialog.alert({
        content: 'login failed',
      });
    }
  };

  return (
    <>
      <div className={style.login}>
        <div className={style.formTitle}>Login Twitter</div>
        <Form
          form={form}
          className={style.formContainer}
          onValuesChange={onValuesChange}
        >
          <Form.Item
            name="username"
            rules={[
              { required: true, message: 'Name cannot be null' },
            ]}
          >
            <TInput label="Name" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Password cannot be null' },
            ]}
          >
            <TInput label="Password" type="password" />
          </Form.Item>
        </Form>
        <div className={style.gotoRegister}>
          No account yet?
          {' '}
          <Link to="/register">
            Register
          </Link>
        </div>
      </div>
      <Footer onClickNextStep={onSubmit} disabled={nextDisabled} label="Next" />
    </>
  );
};

export default Login;
