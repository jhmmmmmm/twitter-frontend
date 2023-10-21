import {
  Form, Dialog,
} from 'antd-mobile';
import Header from '@components/Header';
import TInput from '@components/TInput';
import { useState } from 'react';
import Footer from '../Register/components/Footer';
import style from './index.module.scss';
import { login } from '../../services/login';

const Login = () => {
  const [form] = Form.useForm();
  const [nextDisabled, setNextDisabled] = useState(true);

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
        return;
      }
      Dialog.alert({
        content: 'login failed',
      });
    }
  };

  return (
    <>
      <Header />
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
          <a href="/">Register</a>
        </div>
      </div>
      <Footer onClickNextStep={onSubmit} disabled={nextDisabled} label="Next" />
    </>
  );
};

export default Login;
