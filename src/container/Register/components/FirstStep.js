/* eslint-disable max-len */
import { useState } from 'react';
import { Form } from 'antd-mobile';
import TInput from '@components/TInput';
import DataPickerInput from '@components/DataPickerInput';
import PropTypes from 'prop-types';
import Footer from './Footer';

import style from '../registerIndex.module.scss';

const ACCOUNT_TYPE = {
  TEL: 0,
  EMAIL: 1,
};

const FirstStep = ({
  gotoNextStepHandler,
}) => {
  const [form] = Form.useForm();
  const [formData] = useState({
    username: '',
    tel: '',
    email: '',
    birthday: '',
  });

  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.TEL);
  const [footerButtonDisabled, setFooterButtonDisabled] = useState(true);

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
      gotoNextStepHandler(validate);
    }
  };

  const onValuesChange = async () => {
    try {
      const validate = await form.validateFields();
      if (validate) {
        setFooterButtonDisabled(false);
      }
    } catch (e) {
      if (e.errorFields.length === 0) {
        setFooterButtonDisabled(false);
        return;
      }
      setFooterButtonDisabled(true);
    }
  };

  return (
    <div>
      <div className={style.form}>
        <div className={style.formTitle}>Create your account</div>
        <Form form={form} initialValues={formData} onValuesChange={onValuesChange} className={style.formContainer}>
          <Form.Item name="username" rules={[{ required: true, message: 'Name cannot be null' }]}>
            <TInput length={50} label="Name" />
          </Form.Item>
          {accountType === ACCOUNT_TYPE.TEL && (
          <Form.Item
            name="tel"
            rules={[
              {
                required: true,
                message: 'Phone number cannot be null',
              },
              {
                pattern: /^(?:\+?1[-.●]?)?\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/,
                message: 'Invalid U.S. phone number format',
              },
            ]}
          >
            <TInput length={10} label="Phone" />
          </Form.Item>
          )}
          {accountType === ACCOUNT_TYPE.EMAIL && (
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Email cannot be null' },
              {
                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email format',
              },
            ]}
          >
            <TInput label="Email" />
          </Form.Item>
          )}
          <span className={style.changeTypeButton} onClick={onAccountTypeChange}>
            {accountType === ACCOUNT_TYPE.EMAIL ? 'Use phone number instead' : 'Use email instead'}
          </span>
          <div className={style.birthday}>Date of birth</div>
          <div>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</div>
          <Form.Item name="birthday">
            <DataPickerInput />
          </Form.Item>
        </Form>
      </div>
      <Footer onClickNextStep={onClickNextStep} disabled={footerButtonDisabled} label="Next" />
    </div>
  );
};

FirstStep.propTypes = {
  gotoNextStepHandler: PropTypes.func.isRequired,
};

export default FirstStep;
