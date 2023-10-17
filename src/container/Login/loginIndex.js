import './loginIndex.css';
import { Button, Input, Form, PasscodeInput, NumberKeyboard, Dialog } from 'antd-mobile';
const initialValues = {
  username: 'hahaha',
  password: 'lalal'
};

const Login = () => {
  const [form] = Form.useForm()
  const onSubmit = () => {
    const values = form.getFieldsValue()
    Dialog.alert({
      content: <pre>{JSON.stringify(values, null, 2)}</pre>,
    })
  }

  return (
    <div className="login">
      <Form 
        form={form}
        layout='horizontal' mode='card' initialValues={initialValues} 
        footer={
          <Button block color='primary' onClick={onSubmit} size='large'>
            Login
          </Button>
        }
      >
        <Form.Item label='username' name='username'>
          <Input placeholder='please enter username' clearable />
        </Form.Item>
        <Form.Item label='passowrd' name='password'>
          <Input placeholder='please enter password' clearable type='password' />
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
