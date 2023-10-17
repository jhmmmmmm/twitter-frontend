import './loginIndex.css';
import {
  Button, Input, Form, Dialog,
} from 'antd-mobile';
import { loginService } from '../../services/login';

const initialValues = {
  username: '12345',
  password: '12345',
};

const Login = () => {
  const [form] = Form.useForm();
  const onSubmit = async () => {
    const values = form.getFieldsValue();
    const res = await loginService(values.username, values.password);
    if (res.length > 0) {
      Dialog.alert({
        content: 'login success',
      });
      return;
    }
    Dialog.alert({
      content: 'login failed',
    });
  };

  return (
    <div className="login">
      <Form
        form={form}
        layout="horizontal"
        mode="card"
        initialValues={initialValues}
        footer={(
          <Button block color="primary" onClick={onSubmit} size="large">
            Login
          </Button>
        )}
      >
        <Form.Item label="username" name="username">
          <Input placeholder="please enter username" clearable />
        </Form.Item>
        <Form.Item label="passowrd" name="password">
          <Input placeholder="please enter password" clearable type="password" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
