/* eslint-disable max-len */
import { useState } from 'react';
import { Input, Button, Form } from 'antd-mobile';
import Header from '../../components/Header';
import DataPickerInput from '../../components/DataPickerInput';

import style from './registerIndex.module.scss';

const ACCOUNT_TYPE = {
  TEL: 0,
  EMAIL: 1,
};

const Register = () => {
  const [form] = Form.useForm();
  const [formData] = useState({
    name: '',
    tel: '',
    email: '',
    birthday: '',
  });

  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.TEL);

  const onAccountTypeChange = () => {
    if (accountType === ACCOUNT_TYPE.TEL) {
      setAccountType(ACCOUNT_TYPE.EMAIL);
      return;
    }
    setAccountType(ACCOUNT_TYPE.TEL);
  };

  const onClickNextStep = async () => {
    const validate = await form.validateFields();
    if (validate) {
      console.log(validate);
    }
  };

  return (
    <div>
      <div className={style.form}>
        <Header />
        <div className={style.formTitle}>Create your account</div>
        <Form form={form} initialValues={formData} className={style.formContainer}>
          <Form.Item name="name" rules={[{ required: true, message: 'Name cannot be null' }]}>
            <Input placeholder="Name" className={style.input} />
          </Form.Item>
          {accountType === ACCOUNT_TYPE.TEL && (
          <Form.Item name="tel" rules={[{ required: true, message: 'Phone number cannot be null' }]}>
            <Input placeholder="Phone" className={style.input} />
          </Form.Item>
          )}
          {accountType === ACCOUNT_TYPE.EMAIL && (
          <Form.Item name="email" rules={[{ required: true, message: 'Email cannot be null' }]}>
            <Input placeholder="Email" className={style.input} />
          </Form.Item>
          )}
          <div className={style.changeTypeButton} onClick={onAccountTypeChange}>
            {accountType === ACCOUNT_TYPE.EMAIL ? 'Use phone number instead' : 'Use email instead'}
          </div>
          <div className={style.birthday}>Date of birth</div>
          <div>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</div>
          <Form.Item name="birthday">
            <DataPickerInput />
          </Form.Item>
        </Form>
      </div>
      <div className={style.footer}>
        <Button className={style.footerButton} onClick={onClickNextStep}>Next</Button>
      </div>
    </div>
  );
};

export default Register;
