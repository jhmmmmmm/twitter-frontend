/* eslint-disable max-len */
import { Input, Button } from 'antd-mobile';
import Header from '../../components/Header';
import DataPickerInput from '../../components/DataPickerInput';

import style from './registerIndex.module.css';

const Register = () => {
  console.log('>>>');
  return (
    <div>
      <div className={style.form}>
        <Header />
        <div className={style.formTitle}>Create your account</div>
        <Input placeholder="Name" className={style.input} />
        <Input placeholder="Phone" className={style.input} />
        <div className={style.changeTypeButton}>Use email instead</div>
        <div className={style.birthday}>Date of birth</div>
        <div>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</div>
        <DataPickerInput />
      </div>
      <div className={style.footer}>
        <Button className={style.footerButton}>Next</Button>
      </div>
    </div>
  );
};

export default Register;
